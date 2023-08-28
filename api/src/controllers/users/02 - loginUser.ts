import User from "../../models/User";
import { UserLogin, UserType } from "../../types/user";
import { passwordCompare } from "../../utils/bycript.handler";
import { generateToken } from "../../utils/jwt.handler";


export const loginUser = async ({identifier,password}:UserLogin) => {
  const user = await User.findOne({
    $or:[{email:identifier},{username:identifier}]
  });
  if(!user) throw new Error(`User not found`);
  const passwordHash = user.password;
  const isPasswordCorrect = await passwordCompare (password,passwordHash);
  const token = await generateToken(user.id);
  if(!isPasswordCorrect) throw new Error (`Password incorrect`);
  user.token = token;
  await user.save();
  return user;
};