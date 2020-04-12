import { rule } from 'graphql-shield';
import { Account } from '../models';
import { getAccountIdFromToken, getAuthorizationHeader } from '../utils';

const ROLES = {
  ADMIN: 'ADMIN',
  USER: 'USER'
}

const isAdmin = rule()(async (_parent, _args, { db, request }, _info) => {
  try {
    const authorization = getAuthorizationHeader(request);
    const account_id  = getAccountIdFromToken(authorization);
    const accountExists = await Account(db).exists({ _id: account_id, role: ROLES.ADMIN });
    return accountExists;
  } catch (err) {
    throw err;
  }
});

const isUser = rule()(async (_parent, _args, { db, request }, _info) => {
  try {
    const authorization = getAuthorizationHeader(request);
    const account_id = getAccountIdFromToken(authorization);
    const accountExists = await Account(db).exists({ _id: account_id, role: ROLES.USER });
    return accountExists;
  } catch (err) {
    throw err;
  }
});

export {
  isAdmin,
  isUser
}
