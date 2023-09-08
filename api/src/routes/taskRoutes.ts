import express from "express";

export const taskRouter = express.Router();

// Handlers:

import { addTask,getTask,updateTask,updateState,deleteTask } from "../handlers/taskHandlers";

// Middlewares

import { checkAuth } from "../middlewares/user";
import { postValidate,patchValidate } from "../middlewares/task";

// Enrutado
 
taskRouter.post('/',checkAuth,addTask);
taskRouter.get('/:id',checkAuth,getTask);
taskRouter.patch('/:id',checkAuth,patchValidate,updateTask);
taskRouter.delete('/:id',checkAuth,deleteTask);

taskRouter.patch('/state/:id',checkAuth,updateState);