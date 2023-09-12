import User from "../../models/User";

export const getAllUsersBD = async () => {
  const users = await User.find()
  .select('_id username email userType confirmed active suspend banned premium');
  if(!users || users.length === 0) throw new Error('No hay usuarios en este momento');
  return users;
};