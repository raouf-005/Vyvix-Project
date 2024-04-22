
import React from "react";
import GeneralInfoCard from "../profilecomponent/GeneraInfoCard";
import GoalsCard from "../profilecomponent/GoalsCard";
import ProfileCard from "../profilecomponent/ProfileCard";
import NotificationCard from "../profilecomponent/NotificationCard";



export default function Profile() {
    
    return(
        <div className="w-full gap-6 flex flex-col">
            <ProfileCard/>
            <div className="grid grid-cols-[33%_40%_21%] gap-4 px-4 pr-7 ">
                <GoalsCard/>
                <GeneralInfoCard/>
                <NotificationCard/>
            </div>
        </div>
    )
}