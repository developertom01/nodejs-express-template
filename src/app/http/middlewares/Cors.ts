//Global

import { RequestHandler } from "express";
import cors, { CorsOptions } from "cors";

const CORS_OPTIONS: CorsOptions = {
  allowedHeaders: "*",
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  origin: "*",
};

export const corsMiddleWare: RequestHandler = (...args) => {
  const corsMiddleWareInstance = cors(CORS_OPTIONS);
  return corsMiddleWareInstance(...args);
};
