import React ,{useContext} from "react";
import AuthContext from "./AuthProvider";


// the namong will change to authloading 
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;