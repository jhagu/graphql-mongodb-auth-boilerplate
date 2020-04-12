import { Query, Mutation } from './base';
import { Account, Profile } from './custom';

const resolvers = {
  Query,
  Mutation,
  Account,
  Profile
}

export { resolvers as default} 