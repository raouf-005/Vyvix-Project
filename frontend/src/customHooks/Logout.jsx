import axios from "./Axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PageContext } from "../pages/PagesContainer";



export default async function Logout( ) {

    const { setCurrentPage } = useContext(PageContext);
    const Navigate = useNavigate();

    localStorage.removeItem("auth");
    try {
        const response = await axios.post("/api/userlogout",{},
            {
                withCredentials: true,
            }
        );
        if (response.status === 200) {
           alert("User Logged Out");
            Navigate("/login")
            setCurrentPage("Login")
        }
    
    } catch (error) {
        console.error("Logout failed:", error);
    }
  };