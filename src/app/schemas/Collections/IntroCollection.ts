import { IIntroCollection } from "../../../ports";

export class IntroCollection implements IIntroCollection {
  constructor(private readonly intro: string) {}
  public toJSON() {
    return {
      serverStatus: this.intro,
    };
  }
}
