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
  if(!user.token || user.token === ''){
    const token = await generateToken(user.id);
    user.token = token;
    await user.save();
  }
  if(!isPasswordCorrect) throw new Error (`Password incorrect`);
  // return user;
  return {
    id: user?._id,
    username: user?.username,
    email: user?.email,
    token: user?.token
  }
};