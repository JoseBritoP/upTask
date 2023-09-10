import User from "../../models/User";
import { bycrypt } from "../../utils/bycript.handler";
import { ChangePassword,UserInterface } from "../../types/user";

export const newPassword = async ({ token, password }: ChangePassword):Promise<any> => {
    const user = await User.findOne({ token })
    .select("_id username email")

    if (!user) throw new Error(`User not found`);

    const passwordHash = await bycrypt(password);

    user.password = passwordHash; 
    user.token = "";
    await user.save(); 

    return {
        message: `La contraseña se ha actualizado correctamente!`
    }
};
