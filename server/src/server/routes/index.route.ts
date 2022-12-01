import express, { Request, Response } from "express";
import userRouter from "./user.route";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).send("This is localhost:4000/api");
});

router.use("/user", userRouter);
export default router;
