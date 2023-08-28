import { Request,Response } from "express"

export const addTask = async (req:Request,res:Response) => {
  return res.status(200).json({DIY:'add task'})
};

export const getTask = async (req:Request,res:Response) => {
  return res.status(200).json({DIY:'task id'})
};

export const updateTask = async (req:Request,res:Response) => {
  return res.status(200).json({DIY:'update task'})
};

export const deleteTask = async (req:Request,res:Response) => {
  return res.status(200).json({DIY:'delete task'})
};

export const updateState = async (req:Request,res:Response) => {
  return res.status(200).json({DIY:'task state'})
};