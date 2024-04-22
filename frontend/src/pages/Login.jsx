import React ,{createContext,useState} from "react";
import "../styles/Login.css"
import LoginImg from "./../assets/LoginImg.svg"
import VyvixLogo from "./../assets/VyvixLogo.svg"
import RegisterForm from "./../logincomponents/RegisterForm"
import LoginForm from "./../logincomponents/LoginForm"




export default function Login() {

    const [formselected, setFormSelected] = useState(true)
    

   

    const handleFormChange = (e) => {
        const btnSlide=  document.getElementById('btnSlider')
        const registerBtn =document.getElementById('register')
        const loginBtn =document.getElementById('login')
        if(e.target.innerText === "Register"){
            btnSlide.style.left='0px'
            loginBtn.style.color="rgba(75, 44, 250, 1)"
            e.target.style.transition='color 0.1s linear 0.12s'
            e.target.style.color='white'
            setFormSelected(true)
        }else{
            btnSlide.style.left='50%'
            registerBtn.style.color="rgba(75, 44, 250, 1)"
            e.target.style.transition='color 0.1s linear 0.12s'
            e.target.style.color='white'
            
            setFormSelected(false)
        }
    }

    return(
        
        <div className="flex  max-h-screen    justify-start">
            <div className="flex  max-h-screen  items-center  justify-center ">
            <img src={LoginImg} alt="LoginImg" className="loginPhoto " />
            </div>   
            <div className="  flex  flex-col mt-4 flex-1 justify-center items-center  ">  
                <img src={VyvixLogo} alt="VyvixLogo" className="mb-2  w-12  " />
                    <h4>
                        Welcome to Vyvix!
                    </h4>
                    <div className="mt-6 mb-4 buttonsHolder"  onClick={(e)=>handleFormChange(e)}>
                        <div id="btnSlider" ></div>
                            <button className={`p-5 px-12  toggle-btn ${formselected ? 'text-white':''}` } id="register" >Register</button>
                            <button className="p-5 px-12  pr-14 toggle-btn" id="login" >Login</button>
                    </div>
                 
            <p className=" text-center text-wrap flex max-w-md mb-6 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.  
            </p>
            {
                formselected ? <RegisterForm />:<LoginForm/>
            }
            </div>
           
        </div>
        
    )
}

