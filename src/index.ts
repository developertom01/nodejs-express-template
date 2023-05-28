import { APP_PORT, IsDebugMode } from "./core/env";
import { HttpApp, MongooseManager, Server, WebSocket } from "./managers";

async function main() {
  const httpApp = new HttpApp();
  const server = new Server(httpApp);
  WebSocket.initialize(server);
  await MongooseManager.connect();
  server.app.listen(APP_PORT, () => {
    if (IsDebugMode) {
      console.log(`App started on http://localhost:${APP_PORT}`);
    }
  });
}

main();
