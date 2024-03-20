import React from 'react'
import aboutus1 from './../../assets/aboutus1.svg'
import aboutus2 from './../../assets/aboutus2.svg'
import { Image } from '@nextui-org/react';

export default function AboutUs() {

return(
    <div>
        <div className="flex  flex-col  items-center" id='about-section'>
            <h1 className="text-black  text-5xl    leading-[60px] font-bold max-w-md mb-4 ">
            About Us
            </h1>
            <p  className="max-w-lg text-gray-700 mb-12">
            Experience a transformative journey marked by personalized guidance,
             seamless goal achievement, and a thriving community.
              Elevate your life and reach new heights with our holistic approach.
            </p>

        </div>

        <div className='flex flex-row gap-11 justify-center'>

            <Image src={aboutus1} alt="" />
            <Image src={aboutus2} alt="" />
        </div>

    </div>

)



}