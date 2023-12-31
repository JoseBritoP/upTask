import { Response } from "express"
import { RequestUser } from "../middlewares/user/checkAuth";

import { createTask,getTaskById,editTask,deleteTaskById } from "../controllers/task";

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
  const {creatorId}:any = req.user
  const { id } = req.params
  const {name,description,state,limitDate,priority,completed} = req.body
  try {
    const updatedTask = await editTask({id,creatorId,name,description,state,limitDate,priority,completed})
  } catch (error:any) {
    return res.status(400).json({error:error.message})
  }
  return res.status(200).json({DIY:'update task'})
};

export const deleteTask = async (req:RequestUser,res:Response) => {
  const {id} = req.params;
  const {creatorId}:any = req.user
  try {
    const deletedTask = await deleteTaskById(id,creatorId);
    return res.status(200).json(deletedTask)
  } catch (error:any) {
    return res.status(404).json({error:error.message})
  }
};

export const updateState = async (req:RequestUser,res:Response) => {
  return res.status(200).json({DIY:'task state'})
};