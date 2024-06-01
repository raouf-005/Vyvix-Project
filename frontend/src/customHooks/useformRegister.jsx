import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from './Axios'
import { useNavigate } from 'react-router-dom'; 
import useAuth from '../authcomponent/useAuth';
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';

export default function useFormRegister() {
   const { setIsLoading } = useAuth();
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
                    toast.success(' User registered successfully', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                        });
                navigate('/login')
                formik.resetForm();
                setIsLoading(false);

            } catch (err) {
                if (err.response && err.response.data) {
                    toast.error(' Credentials already exists', {
                        position: "top-center",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                        });
                } else {
                    console.log(err);
                        
                }
                setIsLoading(false);
            }
        },
    });
    
    return formik;
}