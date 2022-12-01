import express, { Request, Response } from "express";
import {
  registerController,
  uploadImage,
} from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send("This is localhost/api/user");
});

userRouter.post("/register", registerController);
userRouter.get("/image", uploadImage);
export default userRouter;
