import { Request,Response,NextFunction } from "express";
import { validateProyect } from "../../schemes/ProyectScheme";


export const postValidate = async (req:Request,res:Response,next:NextFunction) => {
  try {
    const result = await validateProyect(req.body);
    if(!result.success) throw new Error(JSON.stringify(result.error));
    next();
  } catch (error:any) {
    return res.status(400).json({error: JSON.parse(error.message)});
  }
};