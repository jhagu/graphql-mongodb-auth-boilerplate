import jwt from 'jsonwebtoken';

const buildAccessToken = ( payload ) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h'});
} 

export { buildAccessToken as default }