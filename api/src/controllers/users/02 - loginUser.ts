import User from "../../models/User";
import { UserLogin, UserLogged } from "../../types/user";
import { passwordCompare } from "../../utils/bycript.handler";
import { generateToken } from "../../utils/jwt.handler";


export const loginUser = async ({identifier,password}:UserLogin):Promise<UserLogged> => {
  const user = await User.findOne({
    $or:[{email:identifier},{username:identifier}]
  });
  if(!user) throw new Error(`Cuenta inexistente`);
  if(!user.confirmed) throw new Error(`Confirme su cuenta para loguearse`);
  const passwordHash = user.password;
  const isPasswordCorrect = await passwordCompare (password,passwordHash);
  if(!user.token || user.token === ''){
    const token = await generateToken(user.id);
    user.token = token;
    await user.save();
  }
  if(!isPasswordCorrect) throw new Error (`Contraseña incorrecta`);
  // return user;
  return {
    id: user?._id,
    username: user?.username,
    email: user?.email,
    token: user?.token,
    userType: user.userType,
    message: 'Login exitoso!'
  }
};