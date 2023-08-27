import express from "express";

export const userRouter = express.Router();

// Handlers:

import { userRegister,userLogin } from "../handlers/usersHandlers";

// Middlewares

// 

// Enrutado

userRouter.post('/register',userRegister);
userRouter.post('/login',userLogin)