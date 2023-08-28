import { Response } from "express"
import { RequestUser } from "../middlewares/user/checkAuth";

import { createTask,getTaskById } from "../controllers/task";

export const addTask = async (req:RequestUser,res:Response) => {
  const {creatorId}:any = req.user
  const {name,description,priority,proyect} = req.body;
  try {
    const newTask = await createTask({name,description,priority,proyect,creatorId})
    return res.status(201).json(newTask) 
  } catch (error:any) {
    return res.status(400).json({error:error.message})
  }
};

export const getTask = async (req:RequestUser,res:Response) => {
  const {id} = req.params;
  const {creatorId}:any = req.user
  try {
    const task = await getTaskById(id,creatorId);
    return res.status(200).json(task)
  } catch (error:any) {
    return res.status(404).json({error:error.message})
  }
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