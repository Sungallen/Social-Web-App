import express from "express";

export interface TypedRequestBody<T> extends express.Request {
  body: T;
}

export interface IUser {
  id: number
  username: string
  gender: number
  created_time: string
  account: string
  password: string
  email: string
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
