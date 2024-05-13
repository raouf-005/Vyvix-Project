import React from "react";
import TopUser from "../rankingcomponent/TopUser";




export default function Ranking (){

    return(
        <div className="flex w-full justify-center  ">
            <div className=" min-w-[93%]  min-h-[400px] flex justify-center mb-[3%]">
                <TopUser/>      
            </div>
        </div>
    )

}