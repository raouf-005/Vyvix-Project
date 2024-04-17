import React from "react";




export default function Container4Card ({title,step,index}){
    return(
        <div className="flex flex-row gap-6    text-white" id={index}>
            <div className=" mt-2 rounded-full text-blue-700 font-bold text-4xl  bg-white    flex  lg:w-[90px] lg:h-[90px] sm:w-[80px] sm:h-[60px]  items-center justify-center">
                {index}
            </div>
            <div>   
                    <h2 className=" text-2xl mb-1 font-bold">
                    {title}
                    </h2>  
                    <p className="  max-w-[260px]   font-light">
                  {step}
                    </p>  
            </div>

        </div>
    )
}