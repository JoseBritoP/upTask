import User from "../../models/User";
import { bycrypt } from "../../utils/bycript.handler";
import { ChangePassword } from "../../types/user";

export const newPassword = async ({ token, password }: ChangePassword) => {
  try {
    const user = await User.findOne({ token });

    if (!user) throw new Error(`User not found`);


    const passwordHash = await bycrypt(password);
    user.password = passwordHash; 
    user.token = "";
    await user.save(); 

    return user
  } catch (error:any) {
    throw new Error(error.message);
  }
};
