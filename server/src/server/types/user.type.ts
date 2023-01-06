import express from "express";

export interface TypedRequestBody<T> extends express.Request {
  user: IUserAuth;
  body: T;
}

export interface IUser {
  id: number;
  username: string;
  gender: number;
  created_time: string;
  account: string;
  password: string;
  email: string;
}
export interface IUserAuth {
  id: number;
  username: string;
  gender: number;
  created_time: string;
  account: string;
  password: string;
  email: string;
  iat: number;
  exp: number;
}
export interface IRegisterbody {
  username: string;
  gender: number;
  created_time: string;
  account: string;
  password: string;
  email: string;
}

export interface IRegisterRes {
  status: Boolean;
}

export interface IResStatus {
  status: Boolean;
}

export interface IFriendReq {
  id: number;
}
