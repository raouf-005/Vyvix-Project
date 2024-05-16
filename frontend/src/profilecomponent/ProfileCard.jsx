import { Avatar ,Image,Button } from "@nextui-org/react";
import {HeartIcon} from "../assets/HeartIcon"
import { useEffect, useState } from "react";
import axios from "../customHooks/Axios";

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
    const user =props.user||''; //maybe i willadd some logic ot render only the user 
    
    const counter=[
        {value:user.goals||JSON.parse(atob(localStorage.getItem("auth"))).credentials.plans.length||0,label:"Goals"},//change it to goals
        {value:user.points||JSON.parse(atob(localStorage.getItem("auth"))).credentials.points||0,label:"Points"},
        {value:user.rank||JSON.parse(atob(localStorage.getItem("auth"))).credentials.rank||0,label:"Rank"},
    ]
    const [liked, setLiked] = useState(false);


    useEffect(()=>{
        const fetchSetFav = async (isFav) => {     
            try {
            const response = await axios.patch(`/api/user/${isFav}fav/${user._id}`, {
                withCredentials: true
            });
            console.log(response)
            } catch (error) {
            console.log(error)
            }
        }
        if(user?.username){
            if (liked){
                fetchSetFav('');
            }else{
                fetchSetFav('un')
            }
        }
       
        
    },[liked])

    return (
        <div className=" flex justify-center px-4  "
           
        >
        <div className="flex gap-5 flex-col items-center text-center min-h-[340px]  relative  bg-white dark:bg-carddm px-5 pt-4 pb-5 rounded-3xl">
            <div className="flex  flex-col items-center">
                <Image  src={profileInfo.bgmage} className="  max-h-[133px]  z-0 w-[968px]" aria-label="" />
                <Avatar showFallback size="lg" src={user?.image||JSON.parse(atob(localStorage.getItem("auth"))).credentials.image}  className="  border-[5px]  border-white w-[95px] h-[95px]  -mt-12"  />
            {
            
            user?.username ?(
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
              ):null
            }
              
            </div>
            <div>   
                <h3 className="text-black text-2xl font-bold dark:text-white">
                    {user.username||JSON.parse(atob(localStorage.getItem("auth"))).credentials.username||profileInfo.name} 
                </h3>
                <p className='text-slate-400 text-sm '>
                    {user.speciality||JSON.parse(atob(localStorage.getItem("auth"))).credentials.speciality||profileInfo.role}
                </p>
            </div>
            <div className="flex flex-row justify-center gap-16 w-4/6">
                {
                                
                counter.map((item,index) => {
                    return <Counter key={index} value={item.value} label={item.label} />
                })}
            </div>
        </div>
        </div>
    )
}