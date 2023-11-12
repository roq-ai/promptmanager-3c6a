import * as yup from 'yup';

export const responseValidationSchema = yup.object().shape({
  data: yup.string().required(),
  api_call_id: yup.string().nullable().required(),
});
