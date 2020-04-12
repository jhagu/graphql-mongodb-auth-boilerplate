import jwt from 'jsonwebtoken';

const getAccountIdFromToken = (authorization) => {
  const access_token = authorization.split(' ')[1];
  const { account_id } = jwt.verify(access_token, process.env.JWT_SECRET);
  return account_id;
}

export { getAccountIdFromToken as default };