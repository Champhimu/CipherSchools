import * as Yup from 'yup';

const registerSchema = () => Yup.object({
    name:Yup.string().test('Valid Character?','Name is Invalid',(str)=> !(/[^a-zA-Z\s]+/.test(str))).min(2).max(25).required("please enter your name"),
    email:Yup.string().email().required("please enter your email"),
    phone:Yup.string().test('is Integer?','Enter proper number!',(str)=> !isNaN(str) && !isNaN(parseFloat(str))).min(10).max(12),
    gender:Yup.string().required("please select your gender"),
    password:Yup.string().min(6).required("enter your password"),
    cpassword:Yup.string().required("enter confirm password").oneOf([Yup.ref('password'),null],"password does not match")
})

export default registerSchema