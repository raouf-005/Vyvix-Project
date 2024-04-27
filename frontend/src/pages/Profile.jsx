
import React from "react";
import GeneralInfoCard from "../profilecomponent/GeneraInfoCard";
import GoalsCard from "../profilecomponent/GoalsCard";
import ProfileCard from "../profilecomponent/ProfileCard";

import Settings from "../profilecomponent/Settings";



export default function Profile() {
    
    return(
        <div className="w-full gap-6 flex flex-col">
            <div className="flex flex-row justify-center items-end" >
                <ProfileCard/>
                <Settings/>
            </div>
            <div className="grid grid-cols-[37%,44%] gap-4 px-4 pr-7  justify-center  ">
                <GoalsCard/>
                <GeneralInfoCard/>
               
            </div>
        </div>
    )
}