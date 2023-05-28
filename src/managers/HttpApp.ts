import express, { Express, RequestHandler } from "express";
import { GLOBAL_MIDDLEWARE } from "../app/http/middlewares/globalMiddlewares";
export default class HttpApp {
  private instance: Express;
  constructor() {
    this.instance = express();
    HttpApp.applyGlobalMiddleware(this.instance, GLOBAL_MIDDLEWARE);
  }

  public get app() {
    return this.instance;
  }

  public static applyGlobalMiddleware(
    app: Express,
    middlewares: RequestHandler[]
  ) {
    for (const middleware of middlewares) {
      app.use(middleware);
    }
  }
}
