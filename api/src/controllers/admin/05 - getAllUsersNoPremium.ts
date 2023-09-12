import User from "../../models/User";

export const getAllUsersNoPremium = async () => {
  const usersPremium = await User.find({premium:false})
  .select('_id username email userType confirmed active  premium');
  if(!usersPremium || usersPremium.length === 0) throw new Error('No hay usuarios premium en este momento');
  return usersPremium
};