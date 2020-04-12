import { shield, or } from 'graphql-shield';
import { isAdmin, isUser } from './rules';

const permissions = shield({
  Query: {
    myAccount: or(isAdmin, isUser),
    accounts: isAdmin,
    myProfile: or(isAdmin, isUser),
    myPhones: or(isAdmin, isUser),
    myAddress: or(isAdmin, isUser)
  },
  Mutation: {
    updateAccount: or(isAdmin, isUser),
    createAddress: or(isAdmin, isUser),
    createPhone: or(isAdmin, isUser),
  }
});

export { permissions };