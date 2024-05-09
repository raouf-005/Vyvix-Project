import React from "react";
import Navbar from "../landingcomponents/Navbar";
import TitleComponents from "../landingcomponents/TitleComponents";
import TitleBg from './../assets/TitleBg.svg'
import Services from "../landingcomponents/Services";
import ElevateJournee from "../landingcomponents/ElevateJournee";
import Steps from "../landingcomponents/JourneySteps";
import Footer from "../landingcomponents/Footer";
import Sponsor from "../landingcomponents/Sponsor";
import About from "../landingcomponents/About";
import Download from "../landingcomponents/Download";



function BackgroundColor() {
    return <div className=" absolute  top-0 w-full">
        <img src={TitleBg} alt="" className="w-full" />
    </div>;
}




export default function Landing (){
    return(

        <div className=" relative  flex flex-col lg:gap-20 mobile:gap-3 w-full overflow-hidden ">
            <Navbar />
            <TitleComponents/>
            <BackgroundColor/>
            <Sponsor/>
            <About/>
            <Services/>
            <ElevateJournee/>
            <Steps/>
            <Download/>
            <Footer/>
        </div>

    )
}
