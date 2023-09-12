import {Request,Response} from 'express'

// Controllers

import { getAllUsersBD,getAllUsersConfirmates } from '../controllers/admin';

// Handlers

export const getAllUsers = async(_req:Request,res:Response) => {
  try {
    const users = await getAllUsersBD();
    return res.status(200).json(users)
  } catch (error:any) {
    return res.status(404).json({error:error.message})
  }
  // return res.status(200).json({DIY: 'ALL USERS'})
};

export const getAllUsersConfirm = async(_req:Request,res:Response) => {
  try {
    const users = await getAllUsersConfirmates();
    return res.status(200).json(users)
  } catch (error:any) {
    return res.status(404).json({error:error.message})
  }
}

export const getAllUsersNoConfirm = async(_req:Request,res:Response) => {
  return res.status(200).json({DIY: 'ALL USERS NO CONFIRM'})
}

export const deleteUserNoConfirm = async (_req:Request,res:Response) => {
  return res.status(200).json({DIY: 'DELETE A USER NO CONFIRM'})
};

export const deleteAllUsersNoConfirm = async (_req:Request,res:Response) => {
  return res.status(200).json({DIY: 'DELETE ALL USERS NO CONFIRM'})
};

export const getAllUsersPremium = async(_req:Request,res:Response) => {
  return res.status(200).json({DIY: 'ALL USERS PREMIUM'})
}

export const getAllUsersNoPremium = async(_req:Request,res:Response) => {
  return res.status(200).json({DIY: 'ALL USERS NO PREMIUM'})
}

export const removePremiumUser = async (_req:Request,res:Response) => {
  return res.status(200).json({DIY: 'REMOVE PREMIUM STATUS USERS'})
}

export const givePremiumUser = async (_req:Request,res:Response) => {
  return res.status(200).json({DIY: 'GIVE PREMIUUM STATUS USERS'})
}