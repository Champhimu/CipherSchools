import * as Yup from 'yup';

const getCharacterValidationError = (str) => {
    return `Your password must have at least 1 ${str} character`;
};

const registerSchema = () => Yup.object({
    name:Yup.string().test('Valid Character?','Name is Invalid',(str)=> !(/[^a-zA-Z\s]+/.test(str))).min(2).max(25).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    phone:Yup.string().test('is Integer?','Enter proper number!',(str)=> !isNaN(str) && !isNaN(parseFloat(str))).min(10).max(12),
    gender:Yup.string().required("Please select your gender"),
    password:Yup.string().min(8, "Password must have at least 8 character").required("Enter your password")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
    cpassword:Yup.string().required("Please re-type your password").oneOf([Yup.ref('password'),null],"Password does not match")
})

export default registerSchema