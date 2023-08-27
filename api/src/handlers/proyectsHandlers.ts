import { Request,Response } from "express";


export const getProyects = async(req:Request,res:Response) => {
  return res.status(200).json({DIY:"Proyects"})
};

export const getProyect = async(req:Request,res:Response) => {
  return res.status(200).json({DIY:"Proyect with task"})
};

export const createProyect = async(req:Request,res:Response) => {
  return res.status(200).json({DIY:"new Proyect"})
};

export const updateProyect = async(req:Request,res:Response) => {
  return res.status(200).json({DIY:"Edit Proyect"})
};

export const deleteProyect = async(req:Request,res:Response) => {
  return res.status(200).json({DIY:"Edit Proyect"})
};

export const addCollaborator = async(req:Request,res:Response) => {
  return res.status(200).json({DIY:"new collaborator in the Proyect"})
};

export const removeCollaborator = async (req:Request,res:Response) => {
  return res.status(200).json({DIY:"Remove a collaborator of Proyect"})
};

export const getTasks = async (req:Request,res:Response) => {
  return res.status(200).json({DIY:"Get tasks of Proyect"})
}