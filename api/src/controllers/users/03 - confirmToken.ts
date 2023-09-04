import User from "../../models/User";

export const confirmToken = async (token:string):Promise<String> => {
  const user = await User.findOne({token})
  if(!user) throw new Error(`Token invalid`);

  user.confirmed = true;
  user.token = '';
  await user.save();

  return `The user has been confirmed!`
};