import { IntroController } from "../../../app/http/controllers/introController";
import { IController, IntroResource } from "../../../ports";
import { introServiceMock } from "../../mocks/introServiceMock";
jest.mock("express");

describe("IntroController", () => {
  test("Should return `server has started`", () => {
    const introController: IController<IntroResource> = new IntroController(
      introServiceMock
    );
    expect(introController.request()).toEqual({
      serverStatus: "server has started",
    });
  });
});
