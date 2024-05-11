import { useLocation,Navigate,Outlet } from "react-router-dom";
import useAuth from "./useAuth";
import Cookies from 'js-cookie';

// i will saave i atuh in local storage
const RequireAuth = ({allowedRole}) => {
    //const {isAuth} = useAuth();
     
    const isAuth = JSON.parse(localStorage.getItem("auth"));
    const location = useLocation();
    return isAuth?.user && allowedRole===allowedRole  ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}

export default RequireAuth;


//isAuth?.user?.company