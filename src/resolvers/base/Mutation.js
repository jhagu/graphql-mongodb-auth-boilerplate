import { 
  Account, 
  Address, 
  Phone } from '../../models';
import { 
  buildAccessToken, 
  getAccountIdFromToken, 
  getAuthorizationHeader, 
  validatePassword } from '../../utils';

const Mutation = {

  async createAccount(_parent, args, { db }, _info) {
    const { data } = args;
    try {
      const account = await Account(db).create({ ...data });
      return account;
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async login(_parent, args, { db }, _info) {
    const { data } = args;
    try {
      const account = await Account(db).findOne({ email: data.email });
      const { _id: account_id, password, role } = account;
      const isValidPassword = await validatePassword(data.password, password);
      if (!isValidPassword) {
        throw new Error('Invalid password');
      }
      const access_token = buildAccessToken({ account_id, role });

      return {
        access_token
      }

    } catch (err) {
      throw err;
    }
  },

  async updateAccount(_parent, args, { db, req }, _info) {
    const authorization = getAuthorizationHeader(req);
    const account_id = getAccountIdFromToken(authorization);
    const { data } = args;
    try {
      const account = await Account(db).findByIdAndUpdate({ _id: account_id }, { ...data }, { new: true, omitUndefined: true })
      return account;
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async createAddress(_parent, args, { db, req }, _info) {

    const authorization = getAuthorizationHeader(req);
    const account_id = getAccountIdFromToken(authorization);

    const { data } = args;
    try {
      const accountExists = await Account(db).exists({ _id: account_id });
      if (!accountExists) {
        throw new Error(`Account ${account_id} not found`);
      }
      const address = await Address(db).create({ account_id, ...data });
      return address;
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async createPhone(_parent, args, { db, req }, _info) {

    const authorization = getAuthorizationHeader(req);
    const account_id = getAccountIdFromToken(authorization);

    const { data } = args;
    try {
      const accountExists = await Account(db).exists({ _id: account_id });
      if (!accountExists) {
        throw new Error(`Account ${account_id} not found`);
      }
      const phone = await Phone(db).create({ account_id, ...data });
      return phone;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export { Mutation as default }