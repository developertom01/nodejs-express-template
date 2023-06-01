import { GraphQLSchema } from "graphql";
import { ROOT_MUTATION_SCHEMA } from "./mutations/rootQueriesSchema";
import { ROOT_QUERIES_SCHEMA } from "./queries/rootQueriesSchema";

export const GRAPHQL_ROOT_SCHEMA = new GraphQLSchema({
  mutation: ROOT_MUTATION_SCHEMA,
  query: ROOT_QUERIES_SCHEMA,
});
