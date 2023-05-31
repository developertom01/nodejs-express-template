import { NextFunction, Request, Response } from "express";
import { CustomException } from "../../../exceptions";

export const errorHandlerMiddleware = (
  err: Error,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  if (err instanceof CustomException) {
    return res.status(err.status).json(err);
  }
  return res.status(500).json({
    error: "server error",
  });
};
