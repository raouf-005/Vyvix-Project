// Code: Custom hook for login form
import { useFormik } from 'formik';
import * as Yup from 'yup';





export default function useFormLogin() {
    
    const formik = useFormik({
        initialValues: {
            useremail: '',
            password: '',
        },
        onSubmit: values => {
            console.log(values)
        
    },
    validationSchema: Yup.object({
        useremail: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Must be at least 8 characters')
            .required('Required'),
        }),
    });

    return formik
}

