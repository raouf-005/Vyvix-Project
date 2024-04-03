import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

export default function ErrorFooter(){
        const navigate =useNavigate();
    return(
        <div className="flex items-center  gap-6 text-center justify-center flex-col mb-20  mt-32">
        <h1 className=" text-[16rem] font-bold bg-gradient-to-br from-danger   to-blue-600 text-transparent bg-clip-text">
            404 
        </h1>
        <h2 className="text-5xl font-bold -mt-20 text-black">
            Page Not Found
        </h2>
        <p className=" text-gray-400 max-w-lg    leading-8  text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue 
        pretium faucibus leo nisl nulla pharetra nullam.
        </p>
        <Button  onClick={
            ()=>{
                navigate('/');
            }
        }  size="lg" className="bg-gradient-to-r  mt-3 text-md  from-rose-500  to-purple-700  max-w-40 rounded-full text-white  font-medium px-20 py-7 " >
            Homepage
        </Button>

    </div>
    )
}