import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from './Axios'
import { useNavigate } from 'react-router-dom'; 

export default function useFormRegister() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            company: false,
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .required('Required')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    `Password must contain at least 8 characters, one uppercase letter,
                     one lowercase letter, one number, and one special character`
                ),
            username: Yup.string()
                .required('Required')
                .min(4, 'Must be 4 characters or more'),
            company: false,
        }),
        onSubmit:async  (values) => {
            try {
                const response = await axios.post('/api/userregister', values);
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