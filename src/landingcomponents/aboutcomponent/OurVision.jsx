import React from 'react'
import { Image } from '@nextui-org/react';
import OurVisionImage from '../../assets/OurVisionImg.svg';


export default function OurVision() {
    return(
        <div className='flex flex-row justify-around px-14'>
                <div className='flex flex-col items-center '>
                    <h1 className="text-black  text-5xl    leading-[60px] font-bold max-w-md mb-4 ">
                    Our Vision
                    </h1>
                    <p  className="max-w-lg text-gray-700 mb-12">
                    Our vision is to create a world where personal growth is accessible to all. 
                    We envision a community where individuals from all walks of life come together
                    to support and inspire each other on their journeys towards success and fulfillment..
                    <span className="block mt-3">
By                  By harnessing the power of technology and community, 
                    we aim to break down barriers and empower people to reach their goals and live their best lives.
                    </span>
                    </p>
                </div>
               <Image 
                radius='lg'
                src={OurVisionImage}
               />


        </div>
    )
}