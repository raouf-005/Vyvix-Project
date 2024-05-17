import { steps } from "framer-motion";
import temp from "../assets/temp.svg";

import { useNavigate } from "react-router-dom";
import JourneyCard from "./JourneyCard";


const Steps = [
    { title: 'Create Account',
     step: 'Sign up for a world of personalized guidance, goal setting, and community support.' 
    },
    { title: 'Personalize Your Profile',
     step: 'Customize your profile with preferences, goals, and skills for tailored recommendations.'
     },
    { title: 'Start Exploring',
     step: 'Set goals, connect with the community, and witness transformative personal growth.'
     }
];

export default function JourneySteps (){
    const navigate = useNavigate();
    return (
        <div className="flex flex-col sm:gap-4 bg-gradient-to-r from-rose-500 to-purple-700 sm:py-24 mobile:py-8 z-10 " id="howitworks-section">
            <div className="flex justify-around flex-row mb-12 items-center">
                <h1 className="text-white sm:text-5xl mobile:text-3xl mobile:px-2 font-bold max-w-2xl">
                    Begin Your Transformative Journey
                </h1>
                <button
                    onClick={() => {
                        navigate('/register');
                    }}
                    className="bg-white rounded-full font-bold text-lg px-8 h-20 text-indigo-600 sm:inline-block mobile:hidden hover:bg-indigo-600 hover:text-white active:bg-indigo-700 active:text-white"
                >
                    Get Started Now
                </button>
            </div>
            <div className="flex flex-row sm:justify-around  mobile:justify-between   sm:pl-6">
                <div className="flex flex-col justify-around">
                    {Steps.map((step, index) => (
                        <JourneyCard {...step} order={index+1} key={index} />
                    ))}
                </div>
                <div className="sm:flex mobile:hidden">
                    <img src={temp} loading="lazy" alt="" />
                </div>
            </div>
        </div>
    );
}