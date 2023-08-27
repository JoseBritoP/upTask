import express from "express";

export const userRouter = express.Router();

// Handlers:

import { userRegister,userLogin } from "../handlers/usersHandlers";

// Middlewares

import { postValidate } from "../middlewares/user";

// Enrutado

userRouter.post('/register',postValidate,userRegister);
userRouter.post('/login',userLogin)