import { connect } from "mongoose";
import { MONGOOSE_CONNECTION_URI } from "../core/env";

export class MongooseManager {
  public static async connect() {
    await connect(MONGOOSE_CONNECTION_URI);
  }
}
