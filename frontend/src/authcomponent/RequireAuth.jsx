import { useLocation,Navigate,Outlet } from "react-router-dom";
import useAuth from "./useAuth";
// i will saave i atuh in local storage
const RequireAuth = () => {
    //const {isAuth} = useAuth();
    const isAuth = JSON.parse(localStorage.getItem("auth"));
    
    const location = useLocation();
    return isAuth?.user ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}

export default RequireAuth;