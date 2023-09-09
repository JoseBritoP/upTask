import User from "../../models/User";
import { generateToken } from "../../utils/jwt.handler";

export const tokenToChangePassword = async (email:any):Promise<String> => {
  const user = await User.findOne({email});
  if(!user) throw new Error(`Usuario no encontrado`);

  const token = await generateToken(user.id);
  user.token = token;
  await user.save(); 
  return `Compruebe su correo.`;
};