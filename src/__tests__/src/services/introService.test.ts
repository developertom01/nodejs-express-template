import { IIntroService } from "../../../ports";
import { IntroService } from "../../../services/IntroService";

describe("IntroService", () => {
  test("Should return `Server is running`", () => {
    const introService: IIntroService = new IntroService();
    expect(introService.work()).toBe("Server is running");
  });
});
