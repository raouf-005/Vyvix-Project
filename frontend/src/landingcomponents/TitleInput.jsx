import React from "react";
import {Input ,Button} from "@nextui-org/react";
import sms from "./../assets/sms.svg" 


export default function TitleInput ({type, placeholder ,className}){
    return(
        <Input      
         type={type}
         size="lg"
         variant="faded"
         radius="full"
         
          placeholder={placeholder} 
          className={`rounded-3xl p-3 w-80 lg:mt-5  ${className}  `}
      
          endContent={
            <div className=" items-center">
                 <Button  radius="full" className=" text-white bg-gradient-to-r  mobile:text-tiny sm:text-md from-red-500  mobile:-ml-[29px] to-pink-600">
                    Start for  free 
                </Button>
            </div>
          }
          startContent={
            <img src={sms} className="  mr-3 text-2xl text-default-400 pointer-events-none flex-shrink-0  mobile:hidden   sm:flex " />
          }
          />
    )
}