// Code: Custom hook for login form
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from './Axios';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../authcomponent/useAuth';
import { toast } from 'react-toastify';

export default function useFormLogin() {
    const { setIsLoading } = useAuth();
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

            const login = useremail;
            const formvalue = { login, password };
            try {
                const response = await axios.post(
                    '/api/userlogin',
                    formvalue,
                    {
                        withCredentials: true,
                    }
                );
                const data = await response.data;
                    if (response.status === 200) {
/*                          alert(data?.msg||"Login successful")
 */                        formik.resetForm();
                        localStorage.setItem('auth', btoa(JSON.stringify({credentials:data.requestuser })));
                        
                    }          
                    const from =!data.requestuser.company ? '/dashboard' : '/favorites'|| location.state?.from?.pathname ;
                    navigate(from, { replace: true });
            } catch (err) {
                console.log(err);
                toast.error(' Invalid Credentials', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    theme: "light",
                    });
                    setIsLoading(false);
            }
            setIsLoading(false);
            return;
        },
    });

    return formik;
}
