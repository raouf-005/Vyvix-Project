import React ,{useState} from "react";
import "../styles/Login.css"
import LoginImg from "./../assets/LoginImg.svg"
import VyvixLogo from "./../assets/VyvixLogo.svg"
import RegisterForm from "./../components/RegisterForm"
export default function Login() {

    const [formselected, setFormSelected] = useState(true)

    const handleFormChange = (e) => {

        const loginbutton = document.querySelector('#login')
        const registerbutton = document.querySelector('#register')
    
        if(e.target.innerText === "Register"){
                e.target.classList.add("currentForm")
                e.target.classList.remove("otherForm")
                loginbutton.classList.add("otherForm")
                loginbutton.classList.remove("currentForm") 
                setFormSelected(true)

        }else{
            
            e.target.classList.remove("otherForm")
            e.target.classList.add("currentForm")
            registerbutton.classList.remove("currentForm")
            registerbutton.classList.add("otherForm")
            setFormSelected(false)
        }
       
    }

    return(
        <div className="flex gap-5 text-center">
            <div className=" flex-2 flex  justify-end max-h-screen  items-center ">
            <img src={LoginImg} alt="LoginImg" className="loginPhoto" />
            </div>   
            <div className=" flex flex-col flex-1  mt-20  items-center ">          
                    <h4>
                        Welcome to Vyvix!
                    </h4>
                    <div className="mt-6 mb-10"onClick={(e)=>handleFormChange(e)}>
                        <button className="p-5 px-12 pl-14 currentForm " id="register" >Register</button>
                        <button className="p-5 px-16 otherForm "  id="login" >Login</button>
                    </div>
                 
            <p className=" text-center text-wrap flex max-w-sm mb-6 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            {
                formselected ? <RegisterForm />:<RegisterForm/>
            }
            </div>
            <img src={VyvixLogo} alt="" className="absolute right-6 size-26 top-5" />
        </div>
    )
}