import React from "react";
import TopUser from "../rankingcomponent/TopUser";




export default function Ranking (){

    return(
        <div className="flex flex-col gap-8 w-full">

            <div className="w-full  ml-[20%]">
                <TopUser/>      
            </div>
                
            <div className="grid grid-cols-3 gap-6 px-4 w-full ">
                <TopUser/>
                <TopUser/>
                <TopUser/>
            </div>
        
        
        </div>
    )

}