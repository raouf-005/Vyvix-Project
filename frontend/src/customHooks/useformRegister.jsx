import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

export default function useFormRegister() {
    const navigate = useNavigate();
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
                const response = await axios.post('http://localhost:3000/api/userregister', values);
                console.log(response);
                alert('User registered successfully');
                navigate('/login')
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