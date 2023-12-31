import express from "express";

export const adminRouter = express.Router();

// Handlers:

import { getAllUsers,getAllUsersConfirm,getUsersNoPremium,getUsersPremium,getAllUsersNoConfirm,deleteAllUsersNoConfirm,deleteAUserNoConfirm,premiumUser,banUser } from "../handlers/adminHandlers";

// Middlewares

import { checkAuth,checkAdmin } from "../middlewares/user";

// Enrutado

adminRouter.get('/users',checkAuth,checkAdmin,getAllUsers);
adminRouter.get('/users-confirm',checkAuth,checkAdmin,getAllUsersConfirm);
adminRouter.get('/users-no-confirm',checkAuth,checkAdmin,getAllUsersNoConfirm);
adminRouter.get('/user-premium',checkAuth,checkAdmin,getUsersPremium);
adminRouter.get('/user-no-premium',checkAuth,checkAdmin,getUsersNoPremium);
adminRouter.delete('/delete/:id',checkAuth,checkAdmin,deleteAUserNoConfirm);
adminRouter.delete('/delete',checkAuth,checkAdmin,deleteAllUsersNoConfirm);
adminRouter.patch('/premium/:id',checkAuth,checkAdmin,premiumUser);
adminRouter.patch('/ban/:id',banUser);