import * as Yup from 'yup';

const contactSchema = () => Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    phone:Yup.string().min(10).max(15).required("Please enter your mobile no."),
    message:Yup.string().required("Please write some message.")
})

export default contactSchema