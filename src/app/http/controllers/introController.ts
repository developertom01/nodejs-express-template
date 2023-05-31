import { Request, Response } from "express";
import { IController, IIntroService } from "../../../ports";
import { IntroCollection } from "../../schemas/Collections/IntroCollection";

export class IntroController implements IController {
  constructor(private readonly introService: IIntroService) {}
  request(_: Request, res: Response) {
    const response = new IntroCollection(this.introService.apply());
    return res.status(200).json(response);
  }
}
