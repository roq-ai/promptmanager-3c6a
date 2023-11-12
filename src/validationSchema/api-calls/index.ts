import * as yup from 'yup';

export const apiCallValidationSchema = yup.object().shape({
  prompt_id: yup.string().nullable().required(),
});
