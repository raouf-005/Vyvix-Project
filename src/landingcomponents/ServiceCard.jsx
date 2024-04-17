import React from "react";
import {Avatar} from "@nextui-org/react";


export default function ServiceCard({img , title , para}){
    return(
            
            <div className="bg-white rounded-3xl p-3 w-96 mt-8 flex flex-col  items-center   h-[370px]   shadow-md " >
                <div>
                    <Avatar src={img}  className="mb-4 mt-14 w-16 h-16"/>  
                </div>
                <h3 className="text-black text-center font-bold  text-2xl mb-6 ">{title} </h3>
                <p className="  text-gray-800 opacity-90 leading-7  text-center mb-6">{para} </p>
            </div>
    )

}

// <button className="text-lg  font-semibold bg-gradient-to-r from-danger to-primary bg-clip-text text-transparent">Read more &#x2192;</button>
