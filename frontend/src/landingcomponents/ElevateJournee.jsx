import {Button} from "@nextui-org/react";
import ElevateImg from "./../assets/ElevateImg.svg"
import { useNavigate } from "react-router-dom";

export default function ElevateJournee (){

    const navigate = useNavigate();
    return(

        <div className="flex flex-row gap-20  justify-evenly bg-gray-100">

                    <div className="flex flex-col  gap-4  pl-10   justify-center    ">
                            <h1  className="text-black  text-5xl  font-bold max-w-lg">
                            Elevate Your Journey
                            </h1>
                            <p className="text-gray-800 opacity-80   max-w-md">
                            Experience a transformative journey marked by personalized guidance, seamless goal achievement, and a thriving community. Elevate your life and reach new heights with our holistic approach.
                            </p>
                            <Button  
                            onClick={
                                ()=>{
                                    navigate('/register');
                                }
                            }
                            size="lg" className="bg-gradient-to-r  mt-3 text-lg  from-rose-500  to-purple-700  max-w-40 rounded-full text-white  font-semibold px-24 py-7 " >
                            GET STARTED
                            </Button>
                    </div>
                    <div className="">

                    <img src={ElevateImg} alt="" />
                    </div>

        </div>


    )
}