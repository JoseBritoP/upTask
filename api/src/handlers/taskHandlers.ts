import { Response } from "express"
import { RequestUser } from "../middlewares/user/checkAuth";

import { createTask } from "../controllers/task";

export const addTask = async (req:RequestUser,res:Response) => {
  const {creatorId}:any = req.user
  const {name,description,priority,proyect} = req.body;
  try {
    const newTask = await createTask({name,description,priority,proyect,creatorId})
    return res.status(201).json(newTask) 
  } catch (error:any) {
    return res.status(400).json({error:error.message})
  }
  return res.status(200).json({DIY:'add task'})
};

export const getTask = async (req:RequestUser,res:Response) => {
  return res.status(200).json({DIY:'task id'})
};

export const updateTask = async (req:RequestUser,res:Response) => {
  return res.status(200).json({DIY:'update task'})
};

export const deleteTask = async (req:RequestUser,res:Response) => {
  return res.status(200).json({DIY:'delete task'})
};

export const updateState = async (req:RequestUser,res:Response) => {
  return res.status(200).json({DIY:'task state'})
};