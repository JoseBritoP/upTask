import User from "../../models/User";
import { UserInterface, UserType } from "../../types/user";
import { bycrypt } from "../../utils/bycript.handler";
import { generateToken } from "../../utils/jwt.handler";
import { emailRegister } from "../../helpers/email";
import { generateId } from "../../helpers/generateId";
const checkUsernameExist = async (username:string) => {
  const user = await User.findOne({username});
  // if(user) throw new Error (`Username already in use`);
  if(user) throw new Error (`Nombre de usuario en uso`);

};
const checkEmailExist = async (email:string) => {
  const user = await User.findOne({email});
  // if(user) throw new Error (`Email already in use`);
  if(user) throw new Error (`El email está en uso`);
};

export const createUser = async ({username,email,userType='client',password}:UserType):Promise<UserInterface> => {

  await checkUsernameExist(username);
  await checkEmailExist(email);

  
  const passwordHash = await bycrypt(password)
  const newUser = new User({username,email,userType,password:passwordHash})
  // const tokenValid = await generateToken(newUser.id);
  const tokenValid = await generateId();
  newUser.token = tokenValid;
  const savedUser = await newUser.save();
  // return savedUser;
  emailRegister({
    username:savedUser.username,
    email:savedUser.email,
    token: savedUser.token
  })
  return {
    id: savedUser._id,
    username: savedUser.username,
    email: savedUser.email,
    token: savedUser.token,
    userType: savedUser.userType,
    message: 'Cuenta creada con éxito'
  }
};