import config from "../../config/config";
import JWT from "jsonwebtoken";
import { IUser } from "../types/user.type";
import { Response, Request } from "express";

export const generateAccessToken = (user: IUser) => {
  return JWT.sign(user, config.accessToken, { expiresIn: "1hr" });
};

export const autheticateToken = (req: any, res: Response, next: any) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === undefined) return res.send("please login").status(401);
  JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
