import User from "../../models/User";

export const validTokenToChangePassword = async (token:string) => {
  const user = await User.findOne({token});
  if(!user) throw new Error(`Token invalid`);
  return `Token valid`;
};