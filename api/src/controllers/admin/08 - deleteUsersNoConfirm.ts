import User from "../../models/User";

export const deleteUsersNoConfirm = async () => {
  const condition = { confirmed: false };

  const result = await User.deleteMany(condition);
  
  if (result.deletedCount > 0) {
    return {
      message:`Se eliminaron ${result.deletedCount} usuarios no confirmados.`
    }
  } else {
    return {
      message:`No se encontraron usuarios para eliminar.`
    };
  }
}