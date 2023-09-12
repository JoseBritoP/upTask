import User from "../../models/User";
import { RequestUser } from "./checkAuth";
import {  Response, NextFunction } from "express";
export const checkAdmin = async (req:RequestUser,res:Response,next:NextFunction) => {
  try {
    const { creatorId }:any = req.user;
    const user = await User.findOne({_id:creatorId,banned:false,confirmed:true})
    if(!user) throw new Error('Usuario no existente');
    if(user.userType !== 'admin') throw new Error('Unauthorizado')
    next();
  } catch (error:any) {
    return res.status(403).json({error:error.message})
  }
}