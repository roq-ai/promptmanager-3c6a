import * as yup from 'yup';

export const promptValidationSchema = yup.object().shape({
  message: yup.string().required(),
  options: yup.string().required(),
});
