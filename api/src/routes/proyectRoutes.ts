import express from "express";

export const proyectRouter = express.Router();

// Handlers:

import { getProyects,getProyect,createProyect,updateProyect,deleteProyect,addCollaborator,removeCollaborator,getTasks } from "../handlers/proyectsHandlers";

// Middlewares

// 

// Enrutado

proyectRouter.get('/',getProyects);
proyectRouter.post("/",createProyect);

proyectRouter.get('/:id',getProyect);
proyectRouter.put("/:id",updateProyect);
proyectRouter.delete("/:id",deleteProyect);

proyectRouter.get("/task/:id",getTasks);
proyectRouter.post("/add-collaborator/:id",addCollaborator);
proyectRouter.post("/remove-collaborator/:id",removeCollaborator);