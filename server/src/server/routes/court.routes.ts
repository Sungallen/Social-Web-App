import express, { Request, Response } from "express";
import { getCourts } from "../controllers/court.controllers";
import { autheticateToken } from "../helpers/authetication";

export const courtRouter = express.Router();

courtRouter.get("/getcourts", autheticateToken, getCourts);
