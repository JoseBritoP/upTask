import User from "../../models/User";

export const banStatus = async (id:string) => {
  const user = await User.findOne({_id:id})
  .select('_id username email userType confirmed active premium banned');
  if(!user) throw new Error(`El usuario no existe`)

  if(user.banned){
    user.banned = false;
    user.active = true;
    await user.save();
    return {
      user: user.username,
      email: user.email,
      status: user.banned,
      message: 'El usuario se ha desbaneado exitosamente'
    }
  } else {
    user.banned = true;
    user.active = false;
    await user.save();
    return {
      user: user.username,
      email: user.email,
      status: user.banned,
      message: 'El usuario se ha baneado exitosamente'
    }
  }
};