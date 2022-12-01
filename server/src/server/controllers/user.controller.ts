import register from "../modules/user.module";
import {
  IRegisterbody,
  IRegisterRes,
  TypedRequestBody,
} from "../types/user.type";
import { Response, Request } from "express";
import { dirname } from "path";

export const registerController = (
  req: TypedRequestBody<IRegisterbody>,
  res: Response
) => {
  try {
    const insertValues = req.body;
    register(insertValues)
      .then((result: IRegisterRes) => {
        res.send(result);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  } catch (e) {
    res.status(400).send(e);
  }
};

export const uploadImage = (req: Request<{ path: string }>, res: Response) => {
  const path = req.query.path;
  const rootPath = dirname(require.main.filename);
  res.sendFile(rootPath + path);
};
