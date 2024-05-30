import { createContext, useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  /*     const [isAuth, setIsAuth] = useState(localStorage.getItem("auth") || null);
   */
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <AuthContext.Provider value={{ isLoading, setIsLoading }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContext;
