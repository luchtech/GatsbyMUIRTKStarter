import * as yup from 'yup';

export const registerSchema = yup.object({
  email: yup.string().email('Invalid email address.').required(),
  password: yup.string(),
});
