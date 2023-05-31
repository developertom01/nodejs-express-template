import { IIntroService } from "../ports";

export class IntroService implements IIntroService {
  public work() {
    return "Server is running";
  }
}
