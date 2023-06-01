import {
  IController,
  IIntroService,
  IResolver,
  IntroResource,
} from "../../../ports";
import { IntroCollection } from "../../schemas/Collections/IntroCollection";

export class IntroResolver implements IResolver<IntroResource> {
  constructor(private readonly introService: IIntroService) {}
  public resolve = () => {
    return new IntroCollection(this.introService.work()).toJSON();
  };
}
