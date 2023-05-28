import { Server as SocketServer } from "socket.io";
import Server from "./Server";

export class WebSocket {
  private constructor() {}
  private static instance: SocketServer;
  public static initialize(server: Server) {
    this.instance = new SocketServer(server.app);
  }

  public static get io() {
    return this.instance;
  }
}
export default WebSocket