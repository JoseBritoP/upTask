import express from "express";

export const userRouter = express.Router();

// Handlers:

import { userRegister,userLogin,userAuthToken,forgetPassword,checkToken,changePassword } from "../handlers/usersHandlers";

// Middlewares

import { postValidate } from "../middlewares/user";

// Enrutado

userRouter.post('/register',postValidate,userRegister);
userRouter.get('/:token',userAuthToken);
userRouter.post('/login',userLogin);
userRouter.post('/forget-password',forgetPassword); //Email
userRouter.get('/forget-password/:token',checkToken); // Email
userRouter.patch('/change-password',changePassword);