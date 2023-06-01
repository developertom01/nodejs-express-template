import { APP_PORT, IsDebugMode } from "./core/env";
import { HttpApp, MongooseManager, Server, WebSocket } from "./managers";
import pc from "picocolors";
import { GraphqlManager } from "./managers/GraphqlManager";

async function main() {
  const graphqlApp = new GraphqlManager();
  const httpApp = new HttpApp(graphqlApp);
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
