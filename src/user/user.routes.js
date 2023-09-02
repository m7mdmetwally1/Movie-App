import express from "express";
import { deleteUser, getAllUsers, signIn, signUp, updateUser } from "./user.controller.js";
import { deleteUserSchema, signInSchema, signUpSchema, updateUserSchema } from "./user.validation.js";
import { validation } from "../middleware/validation.js";
import { auth } from "../middleware/auth.js";
const userRouter = express.Router()

userRouter.post('/signUp', validation(signUpSchema), signUp);
userRouter.post('/signIn', validation(signInSchema), signIn);
userRouter.get('/', getAllUsers);  // Changed to GET method
userRouter.delete('/', auth, validation(deleteUserSchema), deleteUser);
userRouter.put('/', auth, validation(updateUserSchema), updateUser);  // Changed to GET method

export default userRouter;
