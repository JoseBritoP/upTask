import User from "../../models/User";
import { UserLogin, UserType } from "../../types/user";
import { passwordCompare } from "../../utils/bycript.handler";

export const loginUserByEmail = async ({email,password}:UserType) => {
  const user = await User.findOne({email});
  if(!user) throw new Error(`User not found`);
  const passwordHash = user.password;
  const isPasswordCorrect = await passwordCompare (password,passwordHash);
  if(!isPasswordCorrect) throw new Error (`Password incorrect`);
  return user;
};

export const loginUserByUsername = async ({username,password}:UserType) => {
  const user = await User.findOne({username});
  if(!user) throw new Error(`User not found`);
  const passwordHash = user.password;
  const isPasswordCorrect = await passwordCompare (password,passwordHash);
  if(!isPasswordCorrect) throw new Error (`Password incorrect`);

  return user;
};

export const loginUser = async ({identifier,password}:UserLogin) => {
  const user = await User.findOne({
    $or:[{email:identifier},{username:identifier}]
  });
  if(!user) throw new Error(`User not found`);
  const passwordHash = user.password;
  const isPasswordCorrect = await passwordCompare (password,passwordHash);
  if(!isPasswordCorrect) throw new Error (`Password incorrect`);
  return user;
};