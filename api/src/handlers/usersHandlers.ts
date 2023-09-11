import {Request,Response} from 'express';

// Controllers

import { createUser,loginUser,confirmToken,tokenToChangePassword,validTokenToChangePassword,newPassword, getAllUsers } from '../controllers/users';

// Handlers

export const getUsers = async (_req:Request,res:Response) => {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users)
  } catch (error:any) {
    return res.status(404).json({error: error.message})
  }
};

export const userRegister = async (req:Request,res:Response) => {
  const {username,email,userType,password} = req.body;
  try {
    const newUser = await createUser({username,email,userType,password});
    return res.status(201).json(newUser)
  } catch (error:any) {
    return res.status(400).json({error:error.message})
  }
};

export const userLogin = async (req:Request,res:Response) => {
  const {username,email,password} = req.body;
  try {
    const identifier = username || email;
    const user = await loginUser({identifier,password});
    return res.status(200).json(user)
  } catch (error:any) {
    return res.status(400).json({error:error.message})
  }
};

export const userAuthToken = async (req:Request,res:Response) => {
  const {token} = req.params;
  try {
    const user = await confirmToken(token);
    return res.status(200).json({message:user});
  } catch (error:any) {
    return res.status(400).json({error:error.message})
  }
};

export const forgetPassword = async (req:Request,res:Response) => {
  // return res.status(200).json({DIY:"Change password"})
  const {email} = req.body;
  // console.log(email)
  try {
    const user = await tokenToChangePassword(email);
    return res.status(200).json({message:user})
  } catch (error:any) {
    return res.status(400).json({error:error.message})
  }
};

export const checkToken = async (req:Request,res:Response) => {
  const {token} = req.params;
  try {
    const user = await validTokenToChangePassword(token);
    return res.status(200).json({message:user});
  } catch (error:any) {
    return res.status(400).json({error:error.message})
  }
};

export const changePassword = async (req:Request,res:Response) => {
  const {token} = req.params;
  const {password} = req.body;
  try {
    const userWithNewPassword = await newPassword({token,password});
    return res.status(200).json(userWithNewPassword)
  } catch (error:any) {
    return res.status(400).json({error:error.message})
  }
};

export const perfil = async(req:Request,res:Response) => {
  
};