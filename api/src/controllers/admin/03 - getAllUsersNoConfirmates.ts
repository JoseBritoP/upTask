import User from "../../models/User";

export const getAllUsersNoConfirmates = async () => {
  const users = await User.find({confirmed:false})
  .select('_id username email userType confirmed active suspend banned premium');
  if(!users || users.length === 0) throw new Error('Todos los usuarios están confirmados en este momento');
  return users;
};