import express from "express";

export const userRouter = express.Router();

// Handlers:

import { userRegister,userLogin,userAuthToken } from "../handlers/usersHandlers";

// Middlewares

import { postValidate } from "../middlewares/user";

// Enrutado

userRouter.post('/register',postValidate,userRegister);
userRouter.get('/:token',userAuthToken);
userRouter.post('/login',userLogin)