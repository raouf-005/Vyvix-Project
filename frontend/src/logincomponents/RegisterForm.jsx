import React, { useContext } from "react";
import {Checkbox,Button } from '@nextui-org/react'
import InputLogin from "./InputLogin";
import useFormRegister from "../customHooks/useformRegister.jsx";



export default function RegisterForm() {
    
    const formik = useFormRegister();
  
    return (
       
        <form className="flex flex-col gap-3 align-middle -mt-4" onSubmit={formik.handleSubmit}>
      
            <InputLogin 
                type="text"
                placeholder="Enter you Username" 
                name="Username" 
                formik={formik}
                
                />
              
            <InputLogin
                placeholder="Email"
                name="Email"
                type="email"
                formik={formik}
            />
            
            <InputLogin
                placeholder="Enter your Password"
                name="Password"
                type="password"
                formik={formik}
            />
            <div className="flex  justify-between ">
                <Checkbox size="sm" radius="none" className="gap-1 ml-2 -mt-3">
                  I accept the terms and conditions
                </Checkbox>
            </div>
            <div className="flex justify-end mr-5
            ">  
                <Button className=" bg-blue-800 text-white px-11 -mt-2" size="lg" radius="lg"  type="submit"   >Register</Button>
            </div>
        
        </form>
       
    )
}

