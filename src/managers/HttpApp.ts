import express, { Express, RequestHandler } from "express";
import "express-async-errors";
import { GLOBAL_MIDDLEWARE } from "../app/http/middlewares/globalMiddlewares";
import mainRoutes from "../app/http/router";
import { errorHandlerMiddleware } from "../app/http/middlewares/ErrorHandlerMiddleware";
export class HttpApp {
  private instance: Express;
  constructor() {
    this.instance = express();
    HttpApp.applyGlobalMiddleware(this.instance, GLOBAL_MIDDLEWARE);
    this.instance.use(mainRoutes);

    //Error  handler
    this.instance.use(errorHandlerMiddleware);
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
