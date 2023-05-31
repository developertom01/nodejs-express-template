import { Router } from "express";
import introRoutes from "./introRoutes";
//All sub routes are supposed to be appended here

const mainRoutes = Router();
mainRoutes.use("/", introRoutes);

export default mainRoutes
