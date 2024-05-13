// Code: Custom hook for login form
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from './Axios';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../authcomponent/useAuth';

export default function useFormLogin() {
    const { setIsAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const formik = useFormik({
        initialValues: {
            useremail: '',
            password: '',
        },
        validationSchema: Yup.object({
            useremail: Yup.string()
                .required('Required')
                .min(4, 'Must be 4 characters or more'),
            password: Yup.string().required('Required'),
        }),
        validateOnBlur: true,
        onSubmit: async (values) => {
            const { useremail, password } = values;

            const username = useremail;
            const formvalue = { username, password };

            try {
                const response = await axios.post(
                    '/api/userlogin',
                    formvalue,
                    {
                        withCredentials: true,
                    }
                );
                const data = await response.data;
                console.log(response)
                console.log(data);
                    if (response.status === 200) {
                        alert(data.msg);
                        formik.resetForm();
                        if (!data.msg) {
                            return;
                        }
                        localStorage.setItem('auth', btoa(JSON.stringify({ user: username ,credentials:data.requestuser })));
                    }
             
                const from = location.state?.from?.pathname || !data.requestuser.company ? '/dashboard' : '/favorites';
                navigate(from, { replace: true });
                return;
            } catch (err) {
                console.log(err);
                alert('Invalid login');
            }
        },
    });

    return formik;
}
