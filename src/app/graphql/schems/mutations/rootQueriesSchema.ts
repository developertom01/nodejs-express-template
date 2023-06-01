import { GraphQLObjectType, GraphQLString } from "graphql";

export const ROOT_MUTATION_SCHEMA = new GraphQLObjectType({
  name: "mutation",
  fields: {
    echo: {
      type: GraphQLString,
      resolve: (_, args) => args,
      args: { serverRunning: { type: GraphQLString } },
    },
  },
});
