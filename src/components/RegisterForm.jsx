import React from "react";
import { Input, Checkbox,Button } from '@nextui-org/react'
import InputLogin from "./InputLogin";

export default function RegisterForm() {
    return (
        <div className="flex flex-col gap-5  align-middle ">
           
            <InputLogin 
                type="text"
                placeholder="Enter you Username" 
                name="Username" />
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
            <div className="flex justify-between
            ">
                <Checkbox size="sm" radius="none" className="gap-1">
                  Remember me 
                </Checkbox>
                <a href="#" className="text-blue-800 ">Forget Password ?</a>
            </div>
                <Button className=" bg-blue-800 text-white max-w-40  justify-self-end   mt-3  ml-[269px] " size="lg" radius="lg" >Register</Button>
            </div>
    )
}
