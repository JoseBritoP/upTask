import {Request,Response} from 'express';

// Controllers

import { createUser,loginUserByEmail,loginUserByUsername,loginUser,confirmToken } from '../controllers/users';

// Handlers

export const getUsers = async (req:Request,res:Response) => {
  return res.status(200).json({DIY:`All users`})
};

export const userRegister = async (req:Request,res:Response) => {
  const {username,email,password} = req.body;
  try {
    const newUser = await createUser({username,email,password});
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