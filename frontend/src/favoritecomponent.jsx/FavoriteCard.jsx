import { Avatar ,Image,Card,Button, Tooltip } from "@nextui-org/react";
import { HeartIcon } from "../assets/HeartIcon";



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
            <p className="text-black font-bold text-xl dark:text-white">{props.value}</p>
            <p className="text-slate-400 text-sm">{props.label}</p>
        </div>
    )
}


export default function FavoriteCard({liked,setLiked}) {

    return (
        <div className=" flex justify-center  "
        
        >
        <div className="flex gap-5 flex-col items-center text-center min-h-[290px]   bg-white dark:bg-carddm px-5 pt-4 pb-5 rounded-3xl">
            <div className="flex  flex-col relative items-center">
                <Image  src={profileInfo.bgmage} className="  max-h-[100px] w-[400px] z-0" aria-label="" />
                <Avatar size="lg" src={profileInfo.avatar}  className="  border-[5px]  border-white w-[75px] h-[75px]  -mt-10"  />
                <Button
                className={`text-default-900/80 dark:text-white  ${liked ? "bg-gradient-to-r from-purple-800     to-pink-700 text-white " :"bg-slate-200"}  dark:bg-carddm  absolute right-1 top-1`}
                radius="lg"
                variant="light"
                size="lg"
                isIconOnly
                onPress={() => setLiked((v) => !v)}
              >
             
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "red" : "none"}
                />
              </Button>
            </div>
            <Tooltip content="Go to user Profile" >
            <Button className="cursor-pointer flex flex-col -gap-4 bg-transparent justify-center hover:bg-slate-200 dark:hover:bg-purple-700/35" size="lg"
                    onClick={()=>{}}
            >   
                <h3 className="text-black text-xl font-bold dark:text-white">
                    {profileInfo.name} 
                </h3>
                <p className='text-slate-400 text-sm '>
                    {profileInfo.role}
                </p>
            </Button>
            </Tooltip>
        
            <div className="flex flex-row justify-center gap-16 w-4/6">
                {profileInfo.counter.map((item,index) => {
                    return <Counter key={index} value={item.value} label={item.label} />
                })}
            </div>
        </div>
        </div>
    )
}