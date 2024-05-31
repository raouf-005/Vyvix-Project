import HeadBtn from "./HeadBtn";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Divider } from "@nextui-org/react";


export default function HeadBar() {
    const navigate = useNavigate();

    const handleClick = (name) => {
       navigate(`/settings/${name}`);
    }
  
    return (
        <div>
        <div className=" flex justify-start gap-8 mt-4  w-full ">
            <HeadBtn name="Profile"  onClick={()=>{handleClick('0')}} currentid={'0'}/>
            <HeadBtn name="Preferences"   onClick={()=>{handleClick('1')}} currentid={'1'}/>
            <HeadBtn name="Security"  onClick={()=>{handleClick('2')}} currentid={'2'}/>
        </div>
        <Divider  className=" z-0  ml-6  w-[96%] dark:bg-black"/>
        </div>
    )
    //i wiill change the name of currentid 
}