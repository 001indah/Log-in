import * as Yup from 'yup'

const FormValidation = Yup.object({
    name: Yup.string().min(8).required("Please Enter name"),
    email: Yup.string().email("Please Enter Valid Email"),
    password: Yup.string().min(5).required("Please Enter Password")
})

export default FormValidation
