import { RequestHandler } from "express";
import { corsMiddleWare } from "./Cors";

//Remember to arrange them in order that you want them.
//Middleware will run from top to down - From index 0 to -1
export const GLOBAL_MIDDLEWARE: RequestHandler[] = [corsMiddleWare];
