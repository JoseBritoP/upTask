import User from "../../models/User";
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { UserAuth } from "../../types/user";
const JWT_SECRET = <string>process.env.JWT_SECRET

export interface RequestUser extends Request {
  user?: string | null;
}

export const checkAuth = async (req:RequestUser,res:Response,next:NextFunction) => {
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
     token = req.headers.authorization.split(' ')[1];
    //  console.log(token)
    try{
      const decoded:any = verify(token,JWT_SECRET);
      // console.log(decoded)
      if(!decoded) throw new Error (`Token invalid`);
      const user = await User.findById(decoded);
      if(!user) throw new Error(`User not found auth`);
      const data:any = {
        id: user.id,
        username :user.username,
        email: user.email
      }
      req.user = data;
      // console.log(req.user)
      next();
    }catch(error:any){
      return res.status(403).json({error: error.message})
    }
  }
};