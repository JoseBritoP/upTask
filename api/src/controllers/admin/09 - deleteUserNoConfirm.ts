import User from "../../models/User";

export const deleteUserNoConfirm = async (id:string) => {
  const userNoConfrim = await User.findByIdAndDelete(id);
  if(!userNoConfrim) throw new Error('No existe el usuario a eliminar')
  return {
    user: userNoConfrim.username,
    email:userNoConfrim.email,
    message: `Se ha borrado el usuario de id ${id}`
  }
}