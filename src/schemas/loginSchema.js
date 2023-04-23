import * as Yup from 'yup';

const loginSchema = () => Yup.object({
    email:Yup.string().email().required("please enter your email"),
    password:Yup.string().min(6).required("enter your password"),
})

export default loginSchema