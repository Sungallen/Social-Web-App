import { modifyImagePath } from "./../modules/user.module";
import { multer } from "multer";
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

export const uploadprofileimageController = (req: any, res: Response) => {
  // post a image from client to server
  // const req = req;
  console.log(req.user);
  console.log(req.body);
  console.log(req.files);
  const file = req.files?.image;
  const path =
    dirname(require.main.filename) +
    `/server/media/users/${req.user.id}/${file.name}`;
  modifyImagePath(
    req.user.id,
    `/server/media/users/${req.user.id}/${file.name}`
  )
    .then((result) => {
      if (result.status === true) {
        file.mv(path, (err) => {
          if (err) {
            console.log(err);
            return res.status(500).send(err);
          }
          return res.status(200).send("File uploaded");
        });
      }
    })
    .catch((error) => res.send(error).status(400));
  // const file = req.files?.file;
  // if (file) {
  //   const path = file.path;
  //   res.status(200).send(path);
  // } else {
  //   res.status(400).send("No file uploaded");
  // }
};
