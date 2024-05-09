import React,{useRef} from "react";
import {Input ,Button} from "@nextui-org/react";
import sms from "./../assets/sms.svg" 
import { useNavigate } from "react-router-dom";
import useFormRegister from "../customHooks/useformRegister.jsx";





export default function TitleInput ({type, placeholder ,className}){
  const navigate =useNavigate()
  const formik = useFormRegister();
  const inputRef = useRef(null)
  const handleRegister=()=>{
  
    const inputValue = inputRef.current.value;
    localStorage.setItem("email", inputValue);
    navigate("/register")
    
  }


    return (
      <Input
        type={type}
        size="lg"
        variant="faded"
        radius="full"
        aria-label=""
        ref={inputRef}
        placeholder={placeholder}
        className={`rounded-3xl p-3 w-80 lg:mt-5 text-black ${className}`}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleRegister();
          }
        }}
        endContent={
          <div className="items-center">
            <Button
              radius="full"
              onClick={() => handleRegister()}
              className="text-white bg-gradient-to-r mobile:text-tiny sm:text-md from-red-500 mobile:-ml-[29px] to-pink-600"
            >
              Sign in
            </Button>
          </div>
        }
        startContent={
          <img
            src={sms}
            className="mr-3 text-2xl text-default-400 pointer-events-none flex-shrink-0 mobile:hidden sm:flex"
          />
        }
      />
    );
}