import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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
            try {
                const response = await axios.post('http://192.168.128.103:3000/api/usersregister', values);
                console.log(response);
                formik.resetForm();
            } catch (err) {
                if (err.response && err.response.data) {
                    console.log(err.response.data);
                } else {
                    console.log(err);
                }
            }
        },
    });
    return formik;
}