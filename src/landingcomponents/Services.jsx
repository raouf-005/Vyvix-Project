import React  from "react";
import ServiceCard from "./ServiceCard";
import serviceIcon1 from "../assets/serviceIcon1.svg";
import serviceIcon2 from "../assets/serviceIcon2.svg";
import serviceIcon3 from "../assets/serviceIcon3.svg";

const arrayservice = [
    {
        img:serviceIcon1,
        title:"Personalized Guidance",
        para:"We offers personalized guidance in fitness, education, finance, and habits for unlocking your full potential.",
    },
    {
        img:serviceIcon3,
        title:"Goal Achievement",
        para:"Empowers goal setting and tracking for the satisfaction of reaching milestones effortlessly.",
    },
    {
        img:serviceIcon2,
        title:"Vibrant Community",
        para:"Supportive community to share achievements, inspire others, and thrive together in a vibrant space.",
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