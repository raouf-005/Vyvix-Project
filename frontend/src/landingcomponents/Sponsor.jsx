import React from 'react';
import First from '../assets/1st.svg';
import Second from '../assets/2nd.svg';
import Third from '../assets/3rd.svg';
import Fourth from '../assets/4th.svg';





export default function Sponsor() {
    return(

        <ul className="flex flex-row justify-evenly px-14">
            <li>
                <img src={First} alt="sponsor" />
            </li>
            <li>
                <img src={Second} alt="sponsor" />
            </li>
            <li>
                <img src={Third} alt="sponsor" />
            </li>
            <li>
                <img src={Fourth} alt="sponsor" />
            </li>
        </ul>
    )
}