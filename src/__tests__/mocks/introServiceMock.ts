import { IIntroService } from "../../ports";

export const introServiceMock: IIntroService = {
  work: jest.fn().mockReturnValue("server has started"),
};
