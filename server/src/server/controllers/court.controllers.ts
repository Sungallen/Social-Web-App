import { Response, Request } from "express";
import { queryCourts } from "../modules/court.modules";
import { ICourt } from "../types/court.type";

export const getCourts = (req: Request, res: Response) => {
  queryCourts()
    .then((result: ICourt[]) => {
      res.send(result);
    })
    .catch((err) => res.send(err).status(400));
};
