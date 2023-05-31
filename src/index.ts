import { APP_PORT, IsDebugMode } from "./core/env";
import { HttpApp, MongooseManager, Server, WebSocket } from "./managers";
import pc from "picocolors";

async function main() {
  const httpApp = new HttpApp();
  const server = new Server(httpApp);
  WebSocket.initialize(server);
  await MongooseManager.connect();
  server.app.listen(APP_PORT, () => {
    if (IsDebugMode) {
      console.log(pc.blue(`App started on http://localhost:${APP_PORT}`));
    }
  });
}

main();
