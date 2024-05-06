// Code: Custom hook for login form
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate,useLocation,Link } from 'react-router-dom';
import useAuth from '../authcomponent/useAuth';


export default function useFormLogin() {

    const {isAuth, setIsAuth} =useAuth();
    const isAuths = localStorage.getItem("auth");

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";


    const formik = useFormik({
        initialValues: {
            useremail: '',
            password: '',
        },
        validationSchema: Yup.object({
            useremail: Yup.string()
                .required('Required')
                .min(4, 'Must be 4 characters or more'),    
            password: Yup.string()
                .required('Required'),
        }),
        validateOnBlur: true,
        onSubmit:async values => {
            const { useremail, password } = values;
      
            const username = useremail;
            const formvalue = { username, password };
          
            try{
                const response = await axios.post('http://localhost:3000/api/userlogin', formvalue,{
                    withCredentials:true
                }
             );
                const data =await response.data;
                
             
                alert(response.data.message)
                formik.resetForm();
                setIsAuth({ user: username,session:document.cookie});
                // i will get rid of the set is aut h 
                localStorage.setItem("auth", JSON.stringify({ user: username}));
        
               navigate(from, { replace: true });
                
               
            }catch(err){
                if (err.response && err.response.data) {
                    console.log(err.response.data);
                }else {
                    console.log(err);
                }
            }
        },
    });
    return formik;
}
