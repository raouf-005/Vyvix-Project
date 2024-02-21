import React from "react";
import { Input, Checkbox,Button } from '@nextui-org/react'
import InputLogin from "./InputLogin";

export default function RegisterForm() {
    return (
        <div className="flex flex-col gap-5  align-middle ">
           
            <InputLogin 
                type="text"
                placeholder="Enter you Username" 
                name="Username " />
            <InputLogin
                placeholder="Email"
                name="Email"
                type="email"
            />
            <InputLogin
                placeholder="Enter your Password"
                name="Password"
               type="password"
            />
            <div className="flex justify-end mr-5
            ">  
                <Button className=" bg-blue-800 text-white px-11" size="lg" radius="lg" >Register</Button>
            </div>
                
        </div>
    )
}
