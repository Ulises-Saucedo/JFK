import * as yup from 'yup'

export const Book = yup.object().shape({
  title: yup.string().required('Campo requerido').min(5, 'Minimo 5 caracteres'),
  bookFile: yup
    .mixed()
    .required('Campo requerido')
    .test(
      'is-valid-type',
      'No es un formato aceptado',
      (value: any) => value.type === 'application/pdf'
    )
})
