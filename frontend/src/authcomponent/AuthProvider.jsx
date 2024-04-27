import { createContext, useState ,useEffect} from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("auth") || null);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;