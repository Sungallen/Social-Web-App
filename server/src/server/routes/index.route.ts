import express, { Request, Response } from "express";
import userRouter from "./user.route";
import { courtRouter } from "./court.routes";
import { groupRouter } from "./group.routes";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).send("This is localhost:4000/api");
});
router.use("/user", userRouter);
router.use("/court", courtRouter);
router.use("/group", groupRouter);

export default router;
