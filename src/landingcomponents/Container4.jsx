import temp from "../assets/temp.svg";
import Container4Card from "./Container4Card";
export default function Container4 (){
    return(
            <div className="flex flex-col  gap-4  bg-gradient-to-r  from-rose-500  to-purple-700  py-24" id="how-it-works-section"> 
                <div className="flex justify-around flex-row  mb-12 items-center">
                    <h1  className="text-white  text-5xl  font-bold  max-w-2xl ">
                        Begin Your Transformative Journey
                    </h1>
                    <button className="  bg-white rounded-full font-bold  text-lg px-8  h-20 text-indigo-600">
                        Get Started Now
                    </button>
                </div>
                <div className=" flex flex-row  justify-around pl-6">
                    <div className="  flex flex-col  justify-around">
                        <Container4Card />
                        <Container4Card/>
                        <Container4Card/>
                    </div>
                    <div className="">
                        <img src={temp} alt=""  /> 
                    </div>
                </div>
                    
            </div>




    )
}