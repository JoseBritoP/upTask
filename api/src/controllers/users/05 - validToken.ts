import User from "../../models/User";

export const validTokenToChangePassword = async (token:string):Promise<String> => {
  const user = await User.findOne({token});
  if(!user) throw new Error(`Token invalid`);
  return `Token valid`;
};