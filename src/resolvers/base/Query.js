import { Account, Phone, Address } from '../../models';
import { getAuthorizationHeader, getAccountIdFromToken } from '../../utils';

const Query = {

  async myAccount(_parent, _args, { db, req }, _info) {
    const authorization = getAuthorizationHeader(req);
    const account_id = getAccountIdFromToken(authorization);
    try {
      const account = await Account(db).findById({ _id: account_id });
      if (!account) {
        throw new Error(`Account ${account_id} not found`);
      }
      return account;
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async accounts(_parent, _args, { db }, _info) {
    try {
      const accounts = await Account(db).find();
      if (!accounts) {
        throw new Error('Accounts not found');
      }
      return accounts;
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async myProfile(_parent, _args, { db, req }, _info) {
    const authorization = getAuthorizationHeader(req);
    const account_id = getAccountIdFromToken(authorization);
    try {
      let profile = {}
      const account = await Account(db).findOne({ _id: account_id });
      if (!account) {
        throw new Error(`Profile for account ${account_id} not found`);
      }
      const { name, email } = account;
      profile = {
        account_id,
        name,
        email
      }
      return profile;
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async myPhones(_parent, _args, { db, req }, _info) {
    const authorization = getAuthorizationHeader(req);
    const account_id = getAccountIdFromToken(authorization);
    try {
      const phones = await Phone(db).find({ account_id });
      return phones;
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async myAddress(_parent, _args, { db, req }, _info) {
    const authorization = getAuthorizationHeader(req);
    const account_id = getAccountIdFromToken(authorization);
    try {
      const address = await Address(db).findOne({ account_id });
      return address;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export { Query as default };
