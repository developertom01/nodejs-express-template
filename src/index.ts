import { APP_PORT, IsDebugMode } from "./core/env";
import HttpApp from "./managers/HttpApp";
import Server from "./managers/Server";
import { WebSocket } from "./managers/WebSocket";

async function main() {
  const httpApp = new HttpApp();
  const server = new Server(httpApp);
  WebSocket.initialize(server);

  server.app.listen(APP_PORT, () => {
    if (!IsDebugMode) {
      console.log(`App started on http://localhost:${APP_PORT}`);
    }
  });
}

main();
