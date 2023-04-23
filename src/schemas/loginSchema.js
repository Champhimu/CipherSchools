import * as Yup from 'yup';

const loginSchema = () => Yup.object({
    email:Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(8).required("Enter your password"),
})

export default loginSchema