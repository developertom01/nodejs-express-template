import { GraphQLObjectType, GraphQLString } from "graphql";
import { introResolverInstance } from "../../resolvers/resolverInstances";

const UserSchema = new GraphQLObjectType({
  name: "serverStatus",
  fields: {
    serverStatus: { type: GraphQLString, description: "server status" },
  },
});

export const introGraphqlSchema = new GraphQLObjectType({
  fields: {
    getServerStatus: {
      type: UserSchema,
      resolve: introResolverInstance.resolve,
      args: {},
      description: "Get server status",
    },
  },
  name: "into",
});
