import { compare  } from 'bcryptjs';

const validatePassword = async (passwordToValidate, hashedPasword) => {
  return await compare(passwordToValidate, hashedPasword);
}


export { validatePassword as default }