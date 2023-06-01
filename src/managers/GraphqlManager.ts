import { graphqlHTTP } from "express-graphql";
import { IsDebugMode } from "../core/env";
import { GRAPHQL_ROOT_SCHEMA } from "../app/graphql/schems";

type GraphqlMiddleware = ReturnType<typeof graphqlHTTP>;

export class GraphqlManager {
  private _middleware: GraphqlMiddleware;
  constructor() {
    this._middleware = graphqlHTTP({
      graphiql: IsDebugMode,
      schema: GRAPHQL_ROOT_SCHEMA,
    });
  }
  public get middleware() {
    return this._middleware;
  }
}
