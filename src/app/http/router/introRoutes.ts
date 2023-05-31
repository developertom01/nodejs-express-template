import { Router } from "express";
import { introControllerInstance } from "../controllers/instances";
import { HttpBadRequestException } from "../../../exceptions";
//All sub routes are supposed to be appended here

const router = Router();
router.get("", (_, res) => {
  return res.status(200).json(introControllerInstance.request());
});

export default router;
