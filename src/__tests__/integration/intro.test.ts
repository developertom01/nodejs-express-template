import request from "supertest";
import { HttpApp } from "../../managers";

describe("Test Intro endpoint", () => {
  let httpApp: HttpApp;
  beforeEach(() => {
    httpApp = new HttpApp();
  });
  it("Status should be 200", (done) => {
    request(httpApp!.app).get("/").expect(200, done);
  });
});
