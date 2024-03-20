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
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return formik;
}