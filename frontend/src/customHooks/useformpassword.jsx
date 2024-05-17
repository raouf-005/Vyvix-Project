import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from './Axios';




export default function useFormPassword() {
    const formik = useFormik({
        initialValues: {
            currentpassword: '',
            newpassword: '',
            confirmpassword: ''
        },
        validationSchema: Yup.object({
            currentpassword: Yup.string()
                .required('Required'),
            newpassword: Yup.string()
                .required('Required')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    `Password must contain at least 8 characters, one uppercase letter,
                     one lowercase letter, one number, and one special character`
                ),
            confirmpassword: Yup.string()
                .required('Required')
                .oneOf([Yup.ref('newpassword'), null], 'Passwords must match')
        }),
        validateOnBlur: true,
        onSubmit: async (values) => {
            const { currentpassword, newpassword } = values;
            const formvalue = { currentpassword, newpassword };
            try {
                const response = await axios.patch(
                    '/api/user/changepassword',
                    formvalue,
                    {
                        withCredentials: true,
                    }
                );
                const data = await response.data;
                console.log(response)
                if (response.status === 200) {
                    alert(data)
                    formik.resetForm();
                }
            } catch (err) {
                console.log(err);
                alert('Invalid login');
            }
            return;
        },
    });

    return formik;
}