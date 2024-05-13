import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";

export default function ErrorBody({error="404",message="Page Not Found",navigateTo=-1}){
        const navigate =useNavigate();
    return(
        <div className="flex items-center  gap-6 text-center justify-center flex-col mb-20  mt-32">
        <h1 className=" text-[16rem] font-bold bg-gradient-to-br from-danger   to-blue-600 text-transparent bg-clip-text">
            {error} 
        </h1>
        <h2 className="text-5xl font-bold -mt-20 text-black">
            {message}
        </h2>
        <p className=" text-gray-400 max-w-lg    leading-8  text-lg">
        Page Error {error}, The page you are looking for might have been removed had its name changed or is temporarily unavailable.
        </p>
        <Button  onClick={
            ()=>{
                navigate(navigateTo);
            }
        }  size="lg" className="bg-gradient-to-r  mt-3 text-md  from-rose-500  to-purple-700  max-w-40 rounded-full text-white  font-medium px-20 py-7 " >
            Go Back
        </Button>

    </div>
    )
}