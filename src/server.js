import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';
import { getConnection } from '../database/db';
import { permissions } from './permissions'


const server = new GraphQLServer({
  typeDefs: "./src/schema/schema.graphql",
  resolvers,
  middlewares: [permissions],
  context: async (request) => {
    const db = await getConnection();
    return {
      db,
      request
    }
  }
})
export { server as default }