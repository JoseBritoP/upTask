import express from "express";

export const taskRouter = express.Router();

// Handlers:

import { addTask,getTask,updateTask,updateState,deleteTask } from "../handlers/taskHandlers";

// Middlewares

import { checkAuth } from "../middlewares/user";

// Enrutado
 
taskRouter.post('/',checkAuth,addTask);
taskRouter.get('/:id',checkAuth,getTask);
taskRouter.patch('/:id',checkAuth,updateTask);
taskRouter.delete('/:id',checkAuth,deleteTask);

taskRouter.patch('/state/:id',checkAuth,updateState);