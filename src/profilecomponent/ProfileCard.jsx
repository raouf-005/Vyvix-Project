import { Avatar ,Image } from "@nextui-org/react";



const profileInfo ={
    name: "Abderraouf Derardja",
    role: "Computer science student",
    bgmage: "https://avatars.githubusercontent.com/u/47231168?v=4",
    avatar: "https://avatars.githubusercontent.com/u/47231168?v=4",
    counter:[
        {value:3,label:"Posts"},
        {value:100,label:"Followers"},
        {value:200,label:"Following"},
    ]
}

const Counter = (props) => {
    return (
        <div>
            <p className="text-black font-bold text-xl dark:text-white">{props.value}</p>
            <p className="text-slate-400 text-sm">{props.label}</p>
        </div>
    )
}


export default function ProfileCard(props) {

    return (
        <div className=" flex justify-center px-4 ">
        <div className="flex gap-5 flex-col items-center text-center bg-white dark:bg-carddm px-5 pt-4 pb-5 rounded-3xl">
            <div className="flex  flex-col items-center">
                <Image  src={profileInfo.bgmage} className="  max-h-32  z-0 w-[510px]"/>
                <Avatar size="lg" src={profileInfo.avatar}  className="  border-[7px]  border-white w-[75px] h-[75px]  -mt-10"/>
            </div>
            <div>
                <h3 className="text-black text-xl font-bold dark:text-white">
                    {profileInfo.name} 
                </h3>
                <p className='text-slate-400 text-sm '>
                    {profileInfo.role}
                </p>
            </div>
            <div className="flex flex-row justify-evenly w-4/6">
                {profileInfo.counter.map((item,index) => {
                    return <Counter key={index} value={item.value} label={item.label} />
                })}
            </div>
        </div>
        </div>
    )
}