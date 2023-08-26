import {Request,Response} from 'express';

// Controllers

// 

// Handlers

export const getUsers = async (req:Request,res:Response) => {
  return res.status(200).json({DIY:`All users`})
};

export const userRegister = async (req:Request,res:Response) => {
  return res.status(201).json({DIY:`Post a new user`})
};

export const userLogin = async (req:Request,res:Response) => {
  return res.status(200).json({DIY:`Login user`})
};

