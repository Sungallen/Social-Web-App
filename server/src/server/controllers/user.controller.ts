import register, {
  loginModule,
  randomQueryUsers,
} from "../modules/user.module";
import {
  IRegisterbody,
  IRegisterRes,
  TypedRequestBody,
} from "../types/user.type";
import { Response, Request } from "express";
import { dirname } from "path";
import { Result } from "neo4j-driver";

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
    console.log(e);
    res.status(400).send(e);
  }
};

export const uploadImage = (req: Request<{ path: string }>, res: Response) => {
  const path = req.query.path;
  const rootPath = dirname(require.main.filename);
  res.status(200).sendFile(rootPath + path);
};

export const login = (
  req: Request<{ account: string; password: string }>,
  res: Response
) => {
  const account = req.query.account.toString();
  const password = req.query.password.toString();
  loginModule(account, password)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

export const randomSelUsers = (req: TypedRequestBody<null>, res: Response) => {
  console.log(req.user);
  randomQueryUsers(req.user.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => res.status(400).send(error));
};
