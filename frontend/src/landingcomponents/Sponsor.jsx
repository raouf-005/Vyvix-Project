import React from 'react';
import First from '../assets/1st.svg';
import Second from '../assets/2nd.svg';
import Third from '../assets/3rd.svg';
import Fourth from '../assets/4th.svg';





export default function Sponsor() {
    return(

        <ul className="flex flex-row justify-around  items-center sm:px-20  mt-4 sm:mx-0 mobile:mx-7 ">
            <li >
                <img src={First} alt="sponsor1" className='sm:w-[89%]  mobile:size-4/5'/>
            </li>
            <li>
                <img src={Second} alt="sponsor2" className='sm:w-[89%]  mobile:size-4/5' />
            </li>
            <li>
                <img src={Third} alt="sponsor3" className='sm:w-[89%]  mobile:size-4/5'/>
            </li>
            <li>
                <img src={Fourth} alt="sponsor4" className='sm:w-[89%]  mobile:size-4/5' />
            </li>
        </ul>
    )
}