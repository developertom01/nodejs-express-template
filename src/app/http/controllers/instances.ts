import { introServiceInstance } from "../../../services/instances";
import { IntroController } from "./introController";

export const introControllerInstance = new IntroController(
  introServiceInstance
);
