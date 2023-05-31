import { IIntroService } from "../ports/services/IIntroService";

export class IntroService implements IIntroService {
  public apply() {
    return "Server is running";
  }
}
