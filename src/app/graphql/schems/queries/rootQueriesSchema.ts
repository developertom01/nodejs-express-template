import { GraphQLObjectType } from "graphql";
import { introGraphqlSchema } from "./introSchema";
import { introResolverInstance } from "../../resolvers/resolverInstances";

export const ROOT_QUERIES_SCHEMA = new GraphQLObjectType({
  name: "query",
  fields: {
    intro: {
      type: introGraphqlSchema,
      description: "Intro",
      resolve: () => ({}),
    },
  },
});
