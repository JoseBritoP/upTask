import User from "../../models/User";
import { generateToken } from "../../utils/jwt.handler";
import { emailChangePassword } from "../../helpers/email";
import { generateId } from "../../helpers/generateId";

export const tokenToChangePassword = async (email:any):Promise<String> => {
  const user = await User.findOne({email});
  if(!user) throw new Error(`Usuario no encontrado`);

  // const token = await generateToken(user.id);
  const token = await generateId();
  user.token = token;
  await user.save(); 
  emailChangePassword({
    username:user.username,
    email:user.email,
    token:user.token
  })
  return `Compruebe su correo.`;
};