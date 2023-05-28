import http, { Server as HttpServer } from "http";
import HttpApp from "./HttpApp";

export default class Server {
  private instance: HttpServer;
  constructor(httpApp: HttpApp) {
    this.instance = http.createServer(httpApp.app);
  }
  public get app() {
    return this.instance;
  }
}
