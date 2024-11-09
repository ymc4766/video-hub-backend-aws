import express from "express";
import { registerUser } from "../controller/userController";

const userRouter = express.Router();

userRouter.post("/register", registerUser);

export default userRouter;
