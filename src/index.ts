import { APP_PORT, IsDebugMode, MONGOOSE_CONNECTION_URI } from "./core/env";
import { HttpApp, MongooseManager, Server, WebSocket } from "./managers";

async function main() {
  console.log(MONGOOSE_CONNECTION_URI);
  const httpApp = new HttpApp();
  const server = new Server(httpApp);
  WebSocket.initialize(server);
  await MongooseManager.connect();
  server.app.listen(APP_PORT, () => {
    if (!IsDebugMode) {
      console.log(`App started on http://localhost:${APP_PORT}`);
    }
  });
}

main();
