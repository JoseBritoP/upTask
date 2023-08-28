import { Response } from "express";
import { RequestUser } from "../middlewares/user/checkAuth";

import { createProyect,getAllProyects,getProyectById,editProyect,deleteProyectById,getAllProyectTask } from "../controllers/proyects";

export const getProyects = async(req:RequestUser,res:Response) => {
  const {creatorId}:any = req.user
  try {
    const proyects = await getAllProyects({creatorId});
    return res.status(200).json(proyects)
  } catch (error:any) {
    return res.status(404).json({error:error.message})
  }
};

export const getProyect = async(req:RequestUser,res:Response) => {
  const {id} = req.params;
  const { creatorId}:any = req.user;
  try {
    const proyect = await getProyectById(id,creatorId);
    return res.status(200).json(proyect)
  } catch (error:any) {
    if(error.message === "Unauthorized"){
      return res.status(401).json({error:error.message})
    }
    return res.status(404).json({error:error.message})
  }
  // return res.status(200).json({DIY:"Proyect with task"})
};

export const postProyect = async(req:RequestUser,res:Response) => {
  // console.log(req.user)
  const { creatorId }:any = req.user
  // console.log(creatorId)
  const { name,description,client } = req.body;
  // return res.status(200).json({DIY:"new Proyect"})
  try {
    const newProyect = await createProyect({name,description,client, creatorId})
    return res.status(201).json(newProyect);
  } catch (error:any) {
    return res.status(404).json({error:error.message})
  }
};

export const updateProyect = async(req:RequestUser,res:Response) => {
  const {id} = req.params;
  const { creatorId }:any = req.user;
  const {name,description,limitDate,client,collaborators } = req.body;
  try {
    const updatedProyect = await editProyect(id,creatorId,{name,description,limitDate,client,collaborators});
    return res.status(200).json(updatedProyect)
  } catch (error:any) {
    if(error.message === "Unauthorized") return res.status(401).json({error:error.message})
    return res.status(404).json({error:error.message})
  }
};

export const deleteProyect = async(req:RequestUser,res:Response) => {
  const {id} = req.params;
  const { creatorId }:any = req.user;
  try {
    const deletedProyect = await deleteProyectById(id,creatorId);
    return res.status(200).json(deletedProyect);
  } catch (error:any) {
    if(error.message === "Unauthorized") return res.status(401).json({error:error.message})
    return res.status(404).json({error:error.message})
  }
};

export const addCollaborator = async(req:RequestUser,res:Response) => {
  return res.status(200).json({DIY:"new collaborator in the Proyect"})
};

export const removeCollaborator = async (req:RequestUser,res:Response) => {
  return res.status(200).json({DIY:"Remove a collaborator of Proyect"})
};

export const getProyectTasks = async (req:RequestUser,res:Response) => {
  const {id} = req.params;
  const { creatorId }:any = req.user;
  try {
    const proyectTask = await getAllProyectTask(id,creatorId);
    return  res.status(200).json(proyectTask)
  } catch (error:any) {
    return res.status(404).json({error:error.message})
  }
  return res.status(200).json({DIY:"Get tasks of Proyect"})
}