import { Avatar ,Image,Button } from "@nextui-org/react";
import {HeartIcon} from "../assets/HeartIcon"
import { useState } from "react";


const profileInfo ={
    name: "Abderraouf Derardja",
    role: "Computer science student",
    bgmage: "https://avatars.githubusercontent.com/u/47231168?v=4",
    avatar: "https://avatars.githubusercontent.com/u/47231168?v=4",
    counter:[
        {value:3,label:"Goals"},
        {value:100,label:"Points"},
        {value:200,label:"Rank"},
    ]
}

const Counter = (props) => {
    return (
        <div>
            <p className="text-black font-bold text-2xl dark:text-white">{props.value}</p>
            <p className="text-slate-400 text-md">{props.label}</p>
        </div>
    )
}


export default function ProfileCard(props) {
    const user =props.user

    const counter=[
        {value:user?.goals,label:"Goals"},
        {value:user?.points,label:"Points"},
        {value:user?.rank,label:"Rank"},
    ]
    const [liked, setLiked] = useState(false);

    return (
        <div className=" flex justify-center px-4  "
           
        >
        <div className="flex gap-5 flex-col items-center text-center min-h-[340px]  relative  bg-white dark:bg-carddm px-5 pt-4 pb-5 rounded-3xl">
            <div className="flex  flex-col items-center">
                <Image  src={profileInfo.bgmage} className="  max-h-[133px]  z-0 w-[968px]" aria-label="" />
                <Avatar showFallback size="lg" src={user?.image||JSON.parse(atob(localStorage.getItem("auth"))).credentials.image}  className="  border-[5px]  border-white w-[95px] h-[95px]  -mt-12"  />
                <Button
                className={`text-default-900/80 dark:text-white  ${liked ? "bg-gradient-to-r from-danger to-primary text-white " :"bg-slate-200"}  dark:bg-carddm   absolute right-6 top-5`}
                radius="lg"
                variant="light"
                size="lg"
                onPress={() => setLiked((v) => !v)}
              >
               {liked? "Added to favorite":"Add to favorite"}
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "red" : "none"}
                />
              </Button>
            </div>
            <div>   
                <h3 className="text-black text-2xl font-bold dark:text-white">
                    {user?.username||profileInfo.name} 
                </h3>
                <p className='text-slate-400 text-sm '>
                    {user?.speciality||profileInfo.role}
                </p>
            </div>
            <div className="flex flex-row justify-center gap-16 w-4/6">
                {
                                
                profileInfo.counter.map((item,index) => {
                    return <Counter key={index} value={item.value} label={item.label} />
                })}
            </div>
        </div>
        </div>
    )
}