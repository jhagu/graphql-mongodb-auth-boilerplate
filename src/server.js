import { ApolloServer } from 'apollo-server';
import { getConnection } from '../database/db';
import { importSchema } from 'graphql-import';
import { applyMiddleware } from 'graphql-middleware';
import { makeExecutableSchema } from 'graphql-tools';
import { permissions } from './permissions'
import resolvers from './resolvers';


const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs: importSchema('./src/schema/schema.graphql'),
    resolvers,
  }),
  permissions
)

const server = new ApolloServer({
  schema,
  context: async ({ req }) => {
    const db = await getConnection();
    return {
      db,
      req
    }
  }
})
export { server as default }