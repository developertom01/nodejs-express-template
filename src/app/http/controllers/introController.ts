import { IController, IIntroService, IntroResource } from "../../../ports";
import { IntroCollection } from "../../schemas/Collections/IntroCollection";

export class IntroController implements IController<IntroResource> {
  constructor(private readonly introService: IIntroService) {}
  //Use arrow functions to make this keyword refers to class instance not m
  public request = () => {
    return new IntroCollection(this.introService.work()).toJSON();
  };
}
