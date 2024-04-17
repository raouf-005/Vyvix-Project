import React from "react";
import TitleInput from "./TitleInput";
import { Image } from '@nextui-org/react';
import Dashboard from './../assets/Dashboard.svg';

export default function TitleComponents (){
    return(

        <section className="lg:pt-20 "  id="home-section">
           <div className="flex flex-col  items-center justify-center  gap-4 ">
                <h1 className="text-5xl  font-bold text-white max-w-2xl text-center"  >Your path to success starts here with Vyvix.</h1>
                <p className="text-white max-w-lg text-sm pt-6 text-center" >Join us in crafting a vibrant life story filled with achievements, connections, and continuous improvement</p>
                <TitleInput type="text" placeholder="Enter your email" className=" w-4/12 mb-20" />
                <Image src={Dashboard} alt="image" shadow="lg" className="align-middle" />
           </div>
        </section>

    )
}