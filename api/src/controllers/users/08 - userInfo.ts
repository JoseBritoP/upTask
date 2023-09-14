import User from "../../models/User";

export const userInfo = async (id:string) => {
  console.log(id)
  const user = await User.findOne({_id:id})
  .select('_id username email token proyects');

  if(!user) throw new Error('Error al obtener el usuario');
  return {
    id: user._id,
    username:user.username,
    email : user.email ,
    proyects: user.proyects.length === 0 ? 'Crea tus proyectos para verlos aquí' : user.proyects 
  }
}