import express, { Request, Response } from "express";
import { addNewGroup, getGroups } from "../controllers/group.controller";
import { autheticateToken } from "../helpers/authetication";

export const groupRouter = express.Router();

groupRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send("This is localhost:4000/api/group");
});

groupRouter.get("/getgroups", autheticateToken, getGroups);

groupRouter.post("/addgroup", autheticateToken, addNewGroup);

export default groupRouter;
