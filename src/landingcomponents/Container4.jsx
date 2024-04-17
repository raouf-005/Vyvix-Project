import { steps } from "framer-motion";
import temp from "../assets/temp.svg";
import Container4Card from "./Container4Card";
import { useNavigate } from "react-router-dom";


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

export default function Container4 (){
    const navigate = useNavigate();
    return(
            <div className="flex flex-col  gap-4  bg-gradient-to-r  from-rose-500  to-purple-700  py-24" id="howitworks-section"> 
                <div className="flex justify-around flex-row  mb-12 items-center">
                    <h1  className="text-white  text-5xl  font-bold  max-w-2xl ">
                        Begin Your Transformative Journey
                    </h1>
                    <button
                        onClick={
                            ()=>{
                                navigate('/register');
                            }
                        }
                    className="  bg-white rounded-full font-bold  text-lg px-8  h-20 text-indigo-600">
                        Get Started Now
                    </button>
                </div>
                <div className=" flex flex-row  justify-around pl-6">
                    <div className="  flex flex-col  justify-around">
                        {
                            Steps.map((step,index) => (
                               <Container4Card {...step} index={index+1} />
                            ))
                        }
                      
                    </div>
                    <div className="">
                        <img src={temp} alt=""  /> 
                    </div>
                </div>
                    
            </div>




    )
}