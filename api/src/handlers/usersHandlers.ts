import {Request,Response} from 'express';

// Controllers

import { createUser } from '../controllers/users';

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
  return res.status(200).json({DIY:`Login user`})
};