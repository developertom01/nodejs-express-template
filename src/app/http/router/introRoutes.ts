import { Router } from "express";
import { introControllerInstance } from "../controllers/instances";
//All sub routes are supposed to be appended here

const router = Router();
router.get("", introControllerInstance.request);

export default router;
