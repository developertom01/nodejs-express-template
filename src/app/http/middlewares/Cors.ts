//Global

import { Request, Response, NextFunction } from "express";
import cors, { CorsOptions } from "cors";

const CORS_OPTIONS: CorsOptions = {
  allowedHeaders: "*",
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  origin: "*",
};

export const corsMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const corsMiddleWareInstance = cors(CORS_OPTIONS);
  return corsMiddleWareInstance(req, res, next);
};
