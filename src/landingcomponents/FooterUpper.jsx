import React from "react"
import { useNavigate } from "react-router-dom"

export default function FooterUpper(){

    const navigate = useNavigate();

    return(
        <div className="flex text-center  flex-col  items-center gap-8 pb-7">
                <h1 className="text-5xl  font-bold text-white max-w-2xl text-center">
                Empowering Lives, One Goal at a Time.
                </h1>
                <button
                    onClick={
                        ()=>{
                            navigate('/register');
                        
                        }
                    }
                className="  bg-white rounded-full font-bold  text-lg px-8 py-4  text-indigo-600">
                Get Started Now
                </button>
        </div>
    )
}