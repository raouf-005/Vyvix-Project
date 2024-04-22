import React from "react";
import {Avatar} from "@nextui-org/react";


export default function ServiceCard({img , title , para}){
    return(
            
            <div className="bg-white rounded-3xl p-3 sm:w-96 mt-8 flex flex-col items-center   sm:h-[370px] mobile:h-auto   shadow-md " >
                    <Avatar src={img}  className="mb-4 mt-14 w-16 h-16"/>  
                <h3 className="text-black text-center font-bold  mobile:min-w-[209px] sm:min-w-fit  text-2xl mb-6 ">{title} </h3>
                <p className="  text-gray-800 opacity-90 leading-7  text-center mb-6 sm:block mobile:hidden">{para} </p>
            </div>
    )

}

// <button className="text-lg  font-semibold bg-gradient-to-r from-danger to-primary bg-clip-text text-transparent">Read more &#x2192;</button>
