import http, { Server as HttpServer } from "http";
import HttpApp from "./HttpApp";

export class Server {
  private instance: HttpServer;
  constructor(httpApp: HttpApp) {
    this.instance = http.createServer(httpApp.app);
  }
  public get app() {
    return this.instance;
  }
}
export default Server;
