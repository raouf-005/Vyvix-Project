import React from 'react'
import { Image } from '@nextui-org/react';
import OurVisionImage from '../../assets/OurVisionImg.svg';


export default function OurVision() {
    return(
        <div className='flex sm:flex-row mobile:flex-col justify-around sm:px-14 mobile:px-1'>
                <div className='flex flex-col items-center '>
                    <h1 className="text-black  sm:text-5xl mobile:text-3xl    leading-[60px] font-bold max-w-md mb-4 ">
                    Our Vision
                    </h1>
                    <p  className=" text-gray-700 sm:mb-12 sm:max-w-lg mobile:max-w-sm mobile:text-tiny sm:text-lg">
                    Our vision is to create a world where personal growth is accessible to all. 
                    We envision a community where individuals from all walks of life come together
                    to support and inspire each other on their journeys towards success and fulfillment..
                    <span className="block sm:mt-3 mobile:mt-1">
By                  By harnessing the power of technology and community, 
                    we aim to break down barriers and empower people to reach their goals and live their best lives.
                    </span>
                    </p>
                </div>
               <Image 
                radius='lg'
                src={OurVisionImage}
                className='mobile:mt-4 sm:mt-0 sm:mr-0 mobile:mx-5 mobile:max-w-[90%] sm:w-full'
                alt='visionimg'
               />


        </div>
    )
}