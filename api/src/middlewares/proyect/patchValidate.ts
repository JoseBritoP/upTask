import { Request,Response,NextFunction } from "express";
import { validatePartialProyect } from "../../schemes/ProyectScheme";

export const patchValidate = async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await validatePartialProyect(req.body);
    if(!result.success) throw new Error(JSON.stringify(result.error));
    next();
  } catch (error:any) {
    return res.status(400).json({error: JSON.parse(error.message)});
  }
};