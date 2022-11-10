import express from "express";
import registerController from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.get("/", (req: any, res: any) => {
  res.send("This is localhost/api/user");
});

userRouter.post("/register", registerController);

export default userRouter;
