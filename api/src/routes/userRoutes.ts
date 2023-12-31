import express from "express";

export const userRouter = express.Router();

// Handlers:

import { getUsers,userRegister,userLogin,userAuthToken,forgetPassword,checkToken,changePassword,perfil } from "../handlers/usersHandlers";

// Middlewares

import { checkAuth, postValidate } from "../middlewares/user";

// Enrutado

userRouter.get('/',getUsers)
userRouter.get('/profile',checkAuth,perfil)
userRouter.post('/register',postValidate,userRegister);
userRouter.get('/:token',userAuthToken);
userRouter.post('/login',userLogin);
userRouter.post('/forget-password',forgetPassword); //Email
userRouter.get('/forget-password/:token',checkToken); // Email
userRouter.patch('/change-password/:token',changePassword);