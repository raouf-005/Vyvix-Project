import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function useFormRegister() {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .required('Required'),
            username: Yup.string()
                .required('Required')
                .min(4, 'Must be 4 characters or more')
        }),
        onSubmit:async  (values) => {
            const response = axios.post('http://localhost:3001/register',values).catch((err)=>{
                if (err.response &&err) {
                    console.log(err);
                }});

            if (response) {
                console.log(response.data);
                formik.resetForm();
            }
        },
    });
    return formik;
}