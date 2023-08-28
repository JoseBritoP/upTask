import express from "express";

export const proyectRouter = express.Router();

// Handlers:

import { getProyects,getProyect,postProyect,updateProyect,deleteProyect,addCollaborator,removeCollaborator,getTasks } from "../handlers/proyectsHandlers";

// Middlewares

import { checkAuth } from "../middlewares/user";

// Enrutado + Protección de rutas

proyectRouter.get('/',checkAuth,getProyects);
proyectRouter.post("/",checkAuth,postProyect);

proyectRouter.get('/:id',checkAuth,getProyect);
proyectRouter.put("/:id",checkAuth,updateProyect);
proyectRouter.delete("/:id",checkAuth,deleteProyect);

proyectRouter.get("/task/:id",checkAuth,getTasks);
proyectRouter.post("/add-collaborator/:id",checkAuth,addCollaborator);
proyectRouter.post("/remove-collaborator/:id",checkAuth,removeCollaborator);