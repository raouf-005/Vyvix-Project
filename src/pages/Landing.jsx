import React from "react";
import Navbar from "../landingcomponents/Navbar";
import TitleComponents from "../landingcomponents/TitleComponents";
import TitleBg from './../assets/TitleBg.svg'
import Services from "../landingcomponents/Services";
import Container3 from "../landingcomponents/Container3";
import Container4 from "../landingcomponents/Container4";
import Footer from "../landingcomponents/Footer";
import Container2 from "../landingcomponents/Container2";
import Sponsor from "../landingcomponents/Sponsor";
import About from "../landingcomponents/About";



function BackgroundColor() {
    return <div className=" absolute  top-0 w-full">
        <img src={TitleBg} alt="" className="w-full" />
    </div>;
}




export default function Landing (){
    return(

        <div className=" relative  flex flex-col gap-20 ">
            <Navbar />
            <TitleComponents/>
            <BackgroundColor/>
            <Sponsor/>
            <About/>
            <Services/>
            <Container3/>
            <Container4/>
            <Container2/>
            <Footer/>
        </div>

    )
}

