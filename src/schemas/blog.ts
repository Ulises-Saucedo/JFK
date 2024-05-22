import * as yup from 'yup'

export const createPost = yup.object().shape({
  title: yup.string().required('Campo requerido').min(5, 'Minimo 5 caracteres'),
  description: yup
    .string()
    .required('Campo requerido')
    .min(25, 'Minimo 25 caracteres')
    .max(255, 'Maximo 255 caracteres')
})
