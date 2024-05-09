import React, { useContext, useEffect, useState } from "react";
import {Checkbox,Button } from '@nextui-org/react'
import InputLogin from "./InputLogin";
import useFormRegister from "../customHooks/useformRegister.jsx";


export default function RegisterForm() {
    
    const formik = useFormRegister();
    const [EmailPassValue ,setEmailPassValue]=useState(localStorage.getItem('email'))
    const [policyCheked,setpolicyChecked]=useState(false)
    useEffect(()=>{
        if(EmailPassValue){
            formik.setFieldValue('email',EmailPassValue)
            localStorage.removeItem('email')
        }
    },[EmailPassValue])
    
    
    return (
        <form className="flex flex-col gap-2 align-middle -mt-4" onSubmit={formik.handleSubmit}>
            <InputLogin 
                type="text"
                placeholder="Enter your Username" 
                name="Username" 
                formik={formik}
                aria-label="" 
            />
            <InputLogin
                placeholder="Email"
                name="Email"
                type="email"
                formik={formik}
                aria-label="" 
            />
            <InputLogin
                placeholder="Enter your Password"
                name="Password"
                type="password"
                formik={formik}
                aria-label="" 
            />
            <div className="flex justify-between">
                <Checkbox size="sm" isSelected={policyCheked} onValueChange={setpolicyChecked} radius="none" className="gap-1 ml-2 -mt-3" aria-label="">
                    I accept the terms and conditions
                </Checkbox>
            </div>
            <div className="flex justify-end mr-5">  
                <Button className="bg-blue-800 text-white px-11 -mt-2" size="lg" radius="lg" type="submit" isDisabled={!policyCheked || !formik.values.email || !formik.values.username || !formik.values.password  }>Register</Button>
            </div>
        </form>
    )
}

