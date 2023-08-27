import User from "../../models/User";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
const JWT_SECRET = <string>process.env.JWT_SECRET

export interface RequestUser extends Request {
  user?: string | null;
}

export const checkAuth = async (req:RequestUser,res:Response,next:NextFunction) => {
  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    let token = req.headers.authorization.split(' ')[1];
    try{
      const decoded:any = verify(token,JWT_SECRET);
      if(!decoded) throw new Error (`Token invalid`);
      req.user = await User.findById(decoded.id)
      next();
    }catch(error:any){
      return res.status(403).json({error: error.message})
    }
  }
};