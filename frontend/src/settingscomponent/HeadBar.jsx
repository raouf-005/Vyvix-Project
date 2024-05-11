import HeadBtn from "./HeadBtn";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Divider } from "@nextui-org/react";


export default function HeadBar({currentOption, setCurrentOption}) {
    
    const handleClick = (name) => {
        setCurrentOption(name);
    }
  
    return (
        <div>
        <div className=" flex justify-start gap-8 mt-4  w-full ">
            <HeadBtn name="Profile"  currentOpt={currentOption} onClick={()=>{handleClick('Profile')}}/>
            <HeadBtn name="Preferences"  currentOpt={currentOption} onClick={()=>{handleClick('Preferences')}}/>
            <HeadBtn name="Security"  currentOpt={currentOption} onClick={()=>{handleClick('Security')}}/>
        </div>
        <Divider  className=" z-0  ml-6  w-[96%] dark:bg-black"/>
        </div>
    )
}