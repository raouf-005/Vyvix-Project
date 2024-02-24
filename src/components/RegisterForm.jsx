import React, { useContext } from "react";
import {Checkbox,Button } from '@nextui-org/react'
import InputLogin from "./InputLogin";
import {formvalue} from "../pages/Login.jsx"



export default function RegisterForm() {
    
    const formik =useContext(formvalue)

    return (
        <div className="flex flex-col gap-3 align-middle -mt-4">
      
            <InputLogin 
                type="text"
                placeholder="Enter you Username" 
                name="Username" 
                formikfield={formik.getFieldProps('username')}
                />
              
            <InputLogin
                placeholder="Email"
                name="Email"
                type="email"
                formikfield={formik.getFieldProps('email')}
            />
            
            <InputLogin
                placeholder="Enter your Password"
                name="Password"
               type="password"
               formikfield={formik.getFieldProps('password')}
            />
            <div className="flex  justify-between ">
                <Checkbox size="sm" radius="none" className="gap-1 ml-2 -mt-3">
                  I accept the terms and conditions
                </Checkbox>
            </div>
            <div className="flex justify-end mr-5
            ">  
                <Button className=" bg-blue-800 text-white px-11 -mt-2" size="lg" radius="lg" >Register</Button>
            </div>
        
        </div>
    )
}

