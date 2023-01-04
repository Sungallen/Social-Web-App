import express, { Request, Response } from "express";
import {
  login,
  randomSelUsers,
  registerController,
  uploadImage,
} from "../controllers/user.controller";
import { autheticateToken } from "../helpers/authetication";

const userRouter = express.Router();

userRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send("This is localhost/api/user");
});

userRouter.post("/register", registerController);
userRouter.get("/image", uploadImage);
userRouter.get("/login", login);
userRouter.get("/randomgetusers", autheticateToken, randomSelUsers);
export default userRouter;
