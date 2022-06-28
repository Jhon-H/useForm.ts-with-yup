import * as yup from 'yup';

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Correo inválido')
    .required('Correo inválido'),
  password: yup
    .string()
    .trim()
    .min(8, 'La contraseña es de 8 caracteres mínimo.')
    .required('La contraseña es requerida.'),
  remember: yup.boolean(),
});
