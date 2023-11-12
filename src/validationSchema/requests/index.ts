import * as yup from 'yup';

export const requestValidationSchema = yup.object().shape({
  variables: yup.string().nullable(),
  api_call_id: yup.string().nullable().required(),
});
