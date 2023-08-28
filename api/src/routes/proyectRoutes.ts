import express from "express";

export const proyectRouter = express.Router();

// Handlers:

import { getProyects,getProyect,createProyect,updateProyect,deleteProyect,addCollaborator,removeCollaborator,getTasks } from "../handlers/proyectsHandlers";

// Middlewares

import { checkAuth } from "../middlewares/user";

// Enrutado

proyectRouter.get('/',checkAuth,getProyects);
proyectRouter.post("/",checkAuth,createProyect);

proyectRouter.get('/:id',checkAuth,getProyect);
proyectRouter.put("/:id",checkAuth,updateProyect);
proyectRouter.delete("/:id",checkAuth,deleteProyect);

proyectRouter.get("/task/:id",checkAuth,getTasks);
proyectRouter.post("/add-collaborator/:id",checkAuth,addCollaborator);
proyectRouter.post("/remove-collaborator/:id",checkAuth,removeCollaborator);