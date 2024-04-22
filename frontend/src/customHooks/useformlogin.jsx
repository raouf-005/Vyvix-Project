// Code: Custom hook for login form
import { useFormik } from 'formik';
import * as Yup from 'yup';





export default function useFormLogin() {
    const formik = useFormik({
        initialValues: {
            useremail: '',
            password: '',
        },
        validationSchema: Yup.object({
            useremail: Yup.string()
                .required('Required')
                .min(6, 'Must be 4 characters or more'),    
            password: Yup.string()
                .required('Required'),
        }),
        validateOnBlur: true,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return formik;
}
