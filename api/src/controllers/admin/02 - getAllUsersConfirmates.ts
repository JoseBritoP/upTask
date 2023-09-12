import User from "../../models/User";

export const getAllUsersConfirmates = async () => {
  const users = await User.find({confirmed:true})
  .select('_id username email userType confirmed active suspend banned premium');
  if(!users || users.length === 0) throw new Error('No hay usuarios confirmados en este momento');
  return users;
}