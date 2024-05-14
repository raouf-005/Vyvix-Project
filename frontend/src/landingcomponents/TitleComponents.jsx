import React from "react";
import TitleInput from "./TitleInput";
import { Image } from '@nextui-org/react';
import Dashboard from './../assets/Dashboard.svg';


export default function TitleComponents (){
    return(

        <section className="lg:pt-20 "  id="home-section">
           <div className="flex flex-col  items-center justify-center  gap-4 ">
                <h1 className="lg:text-5xl mobile:text-3xl  font-bold text-white lg:max-w-2xl mobile:max-w-sm  text-center"  >Your path to success starts here with Vyvix.</h1>
                <p className="text-white lg:max-w-lg sm:text-sm mobile:text-tiny  mobile:max-w-sm lg:pt-6 text-center" >Join us in crafting a vibrant life story filled with achievements, connections, and continuous improvement</p>
                <TitleInput type="text" placeholder="Enter your email" className=" w-4/12 md:mb-20" />
                <Image src={Dashboard} alt="image" className="align-middle rounded-2xl shadow-slate-500 shadow-xl" aria-label=""  />
           </div>
        </section>

    )
}