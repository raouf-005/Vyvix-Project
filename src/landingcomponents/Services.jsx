import React  from "react";
import ServiceCard from "./ServiceCard";

const arrayservice = [
    {
        img:"",
        title:"hey",
        para:"kkbzkbz",
    },
    {
        img:"",
        title:"hey",
        para:"kkbzkbz",
    },
    {
        img:"",
        title:"hey",
        para:"kkbzkbz",
    },
 
]


export default function Services(){
    return(

        <div className=" text-center flex flex-col " id="services-section">
            <div className="flex justify-center ">
                <h1 className="mb-10   text-black  text-5xl  font-bold max-w-lg">Our services made for you?</h1>
            </div>
            
            <div className="flex flex-row  justify-center gap-10   ">
                {arrayservice.map((service , index) => {
                    return(
                        <ServiceCard key={index} {...service} />
                    )
                })}

            </div>

        </div>
    )
}