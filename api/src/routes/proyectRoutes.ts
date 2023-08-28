import express from "express";

export const proyectRouter = express.Router();

// Handlers:

import { getProyects,getProyect,postProyect,updateProyect,deleteProyect,addCollaborator,removeCollaborator,getProyectTasks } from "../handlers/proyectsHandlers";

// Middlewares

import { checkAuth } from "../middlewares/user";

// Enrutado + Protección de rutas

proyectRouter.get('/',checkAuth,getProyects);
proyectRouter.post("/",checkAuth,postProyect);
// Token user
// Proyect id
proyectRouter.get('/:id',checkAuth,getProyect);
proyectRouter.patch("/:id",checkAuth,updateProyect);
proyectRouter.delete("/:id",checkAuth,deleteProyect);

proyectRouter.get("/task/:id",checkAuth,getProyectTasks);
proyectRouter.post("/add-collaborator/:id",checkAuth,addCollaborator);
proyectRouter.post("/remove-collaborator/:id",checkAuth,removeCollaborator);