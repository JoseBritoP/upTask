import User from "../../models/User";

export const premiumStatus = async (id:string) => {
  const user = await User.findOne({_id:id})
  .select('_id username email userType confirmed active premium');
  if(!user) throw new Error(`El usuario no existe`)
  if(user.premium){
    user.premium = false;
    await user.save()
  } else {
    user.premium = true;
    await user.save();
  }
  return user
};