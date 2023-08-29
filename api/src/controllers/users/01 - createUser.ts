import User from "../../models/User";
import { UserInterface, UserType } from "../../types/user";
import { bycrypt } from "../../utils/bycript.handler";
import { generateToken } from "../../utils/jwt.handler";
const checkUsernameExist = async (username:string) => {
  const user = await User.findOne({username});
  if(user) throw new Error (`Username already in use`);

};
const checkEmailExist = async (email:string) => {
  const user = await User.findOne({email});
  if(user) throw new Error (`Email already in use`);
};

export const createUser = async ({username,email,password}:UserType):Promise<UserInterface> => {

  await checkUsernameExist(username);
  await checkEmailExist(email);

  
  const passwordHash = await bycrypt(password)
  const newUser = new User({username,email,password:passwordHash})
  const tokenValid = await generateToken(newUser.id);
  newUser.token = tokenValid;
  const savedUser = await newUser.save();
  // return savedUser;
  return {
    id: savedUser._id,
    username: savedUser.username,
    email: savedUser.email,
    token: savedUser.token
  }
};