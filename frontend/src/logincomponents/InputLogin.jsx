import React, { useEffect, useState } from "react";
import "../styles/Login.css"
import { Button } from "@nextui-org/react";
import { EyeFilledIcon } from "../assets/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../assets/EyeSlashFilledIcon";





export default function InputLogin ({type ,placeholder,name,formik }){

    const [isVisible, setIsVisible] = useState(true);
    const formikfield = formik.getFieldProps(name.toLowerCase());


    
    return(
        <div className="flex flex-col ml-1 ">
            <label htmlFor={name} className="labelInputLogin mb-2   ">{name==='Useremail'?'Username :':name+' :'}</label>
            <div className=" relative">
                <input type={type==='password'? isVisible? 'password':'text':type} id={name} name={name} placeholder={placeholder} className="inputLogin relative" {...formikfield} />
                {
                    type === 'password' ?(
                        <Button 
                        isIconOnly
                        aria-label="Toggle password visibility"
                     
                        onClick={() =>{ 
                            setIsVisible(!isVisible);
                            
                        }}
                        className="absolute right-4 top-[5.5px] bg-transparent"
                        >
                        {isVisible ? (  
                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            ) : (
                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                            )}
                        </Button>
                    ):null
                }
            </div>
            
            <div className="max-w-[550px]">
                {formik.touched[formikfield.name.toLowerCase()] && formik.errors[formikfield.name.toLowerCase()] ? (
                    <p className="text-red-500 text-xs mt-1 max-w-[450px] ">{formik.errors[formikfield.name.toLowerCase()]}</p>
                ) : null}
            </div>
        </div>
        
    )

}