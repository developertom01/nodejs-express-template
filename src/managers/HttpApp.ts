import express, { Express, RequestHandler } from "express";
import { GLOBAL_MIDDLEWARE } from "../app/http/middlewares/globalMiddlewares";
import mainRoutes from "../app/http/router";
export class HttpApp {
  private instance: Express;
  constructor() {
    this.instance = express();
    HttpApp.applyGlobalMiddleware(this.instance, GLOBAL_MIDDLEWARE);
    this.app.use(mainRoutes);
  }

  public get app() {
    return this.instance;
  }

  //All global middlewares are applied before router initialization
  public static applyGlobalMiddleware(
    app: Express,
    middlewares: RequestHandler[]
  ) {
    for (const middleware of middlewares) {
      app.use(middleware);
    }
  }
}

export default HttpApp;
