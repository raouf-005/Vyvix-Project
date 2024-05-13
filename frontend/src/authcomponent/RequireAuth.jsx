import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";
import Cookies from "js-cookie";

// i will saave i atuh in local storage
const RequireAuth = ({ allowedRoles }) => {
    //const {isAuth} = useAuth();

    const isAuth =localStorage.getItem("auth")? JSON.parse(atob(localStorage.getItem("auth"))):null;
    const location = useLocation();     
    const iscompany = allowedRoles.includes("company");

    console.log("true",isAuth)

    return (isAuth?.credentials?.company === iscompany || allowedRoles.length === 2 ) && localStorage.getItem("auth") ? (
        <Outlet />
    ) : isAuth?.credentials?.username ? (
        <Navigate to="/unauthorized" state={{ from: location }} replace />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};
export default RequireAuth;

//isAuth?.user && isAuth?.credentials?.username && isAuth.credentials.company===company  ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
