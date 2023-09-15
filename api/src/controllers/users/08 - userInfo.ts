import User from "../../models/User";

export const userInfo = async (id:string) => {
  // console.log(id)
  const user = await User.findOne({_id:id})
  .select('_id username email token userType proyects')
  .populate({
    path: "proyects",
    match: { deleted: false },
    select: "_id name description limitDate client completed collaborators tasks",
    populate: {
      path: "tasks",
      match: { deleted: false },
      select: "_id name description state limitDate priority complete" 
    }
  });;

  if(!user) throw new Error('Error al obtener el usuario');
  return {
    id: user._id,
    username:user.username,
    email : user.email,
    userType: user.userType,
    proyects: user.proyects.length === 0 ? 'Crea tus proyectos para verlos aquí' : user.proyects 
  }
}