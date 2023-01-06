import express, { Request, Response } from "express";
import {
  friendRequest,
  login,
  randomSelUsers,
  registerController,
  sharePostController,
  uploadImage,
  uploadprofileimageController,
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
userRouter.post(
  "/uploadprofileimage",
  autheticateToken,
  uploadprofileimageController
);
userRouter.put("/friendreq", autheticateToken, friendRequest);
// post a post to server
userRouter.post("/sharepost", autheticateToken, sharePostController);

export default userRouter;
