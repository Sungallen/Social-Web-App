import express from "express";
import userRouter from "./user.route";

const router = express.Router();

router.get("/", (req: any, res: any) => {
  res.send("This is localhost:4000/api");
});
router.use("/user", userRouter);
export default router;
