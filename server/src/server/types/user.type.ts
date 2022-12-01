import express from "express";

export interface TypedRequestBody<T> extends express.Request {
  body: T;
}

export interface IRegisterbody {
  username: string;
  gender: number;
  created_time: string;
  account: string;
  password: string;
  birth: string;
  email: string;
}

export interface IRegisterRes {
  status: Boolean;
}
