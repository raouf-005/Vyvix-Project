import React from "react";




export default function JourneyCard ({title,step,order}){
    return(
        <div className="flex flex-row gap-6  items-center mobile:ml-6 sm:ml-0  text-white" id={order}>
            <div className=" mt-2 rounded-full text-blue-700 font-bold sm:text-4xl mobile:text-2xl  bg-white    flex  lg:w-[90px] lg:h-[90px] sm:w-[80px] sm:h-[60px]  mobile:w-[40px] mobile:h-[40px]    items-center justify-center">
                {order}
            </div>
            <div>   
                    <h2 className=" text-2xl mb-1 font-bold sm:block mobile:hidden">
                    {title}
                    </h2>  
                    <p className="  sm:max-w-[260px] mobile:text-[15px] mobile:max-w-80   font-light">
                  {step}
                    </p>  
            </div>

        </div>
    )
}