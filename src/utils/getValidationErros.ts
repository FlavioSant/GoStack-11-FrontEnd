import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

const getValidationErros = (err: ValidationError): Errors => {
  const validationErros: Errors = {};

  err.inner.forEach((error) => {
    validationErros[error.path] = error.message;
  });

  return validationErros;
};

export default getValidationErros;
