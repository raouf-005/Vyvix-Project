import React from "react";

const width = 24;
const height = 21;

//Reset every width to it's orginal width and change it from the component it self 
export const HomeImg = ({selected}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.0001 16V11H12.0001V16C12.0001 16.55 12.4501 17 13.0001 17H16.0001C16.5501 17 17.0001 16.55 17.0001 16V8.99997H18.7001C19.1601 8.99997 19.3801 8.42997 19.0301 8.12997L10.6701 0.599971C10.2901 0.259971 9.7101 0.259971 9.3301 0.599971L0.970098 8.12997C0.630098 8.42997 0.840098 8.99997 1.3001 8.99997H3.0001V16C3.0001 16.55 3.4501 17 4.0001 17H7.0001C7.5501 17 8.0001 16.55 8.0001 16Z" fill="url(#paint0_linear_546_7901)"/>
            <defs>
            {
                selected ? (
                    <linearGradient id="paint0_linear_546_7901" x1="0.802246" y1="0.344971" x2="17.3749" y2="18.6541" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FE4768"/>
                        <stop offset="1" stopColor="#4B2CFA"/>
                    </linearGradient>      
                ):(
                    <linearGradient id="paint0_linear_546_7901" x1="0.802246" y1="0.344971" x2="17.3749" y2="18.6541" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#A3AED0"/>
                    </linearGradient>
                )
            }
            </defs>
        </svg>
    )
}

export const ProfileImg = ({selected}) => {
    return(
        <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z" fill="url(#paint0_linear_636_710)"/>
        <defs>
        {
            selected ? (
                <linearGradient id="paint0_linear_636_710" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FE4768"/>
                    <stop offset="1" stopColor="#4B2CFA"/>
                </linearGradient>

            ):(
                <linearGradient id="paint0_linear_636_710" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A3AED0"/>
                </linearGradient>
            )
        }
        </defs>
        </svg>

    )
}

export const RankingImg = ({selected}) => {
    return(
        <svg width={width} height={height+4} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_636_831)">
                <path d="M7.46683 10.7333H7.70016C8.5985 10.7333 9.3335 11.4683 9.3335 12.3666V20.5333C9.3335 21.4316 8.5985 22.1666 7.70016 22.1666H7.46683C6.5685 22.1666 5.8335 21.4316 5.8335 20.5333V12.3666C5.8335 11.4683 6.5685 10.7333 7.46683 10.7333ZM14.0002 5.83325C14.8985 5.83325 15.6335 6.56825 15.6335 7.46659V20.5333C15.6335 21.4316 14.8985 22.1666 14.0002 22.1666C13.1018 22.1666 12.3668 21.4316 12.3668 20.5333V7.46659C12.3668 6.56825 13.1018 5.83325 14.0002 5.83325ZM20.5335 15.1666C21.4318 15.1666 22.1668 15.9016 22.1668 16.7999V20.5333C22.1668 21.4316 21.4318 22.1666 20.5335 22.1666C19.6352 22.1666 18.9002 21.4316 18.9002 20.5333V16.7999C18.9002 15.9016 19.6352 15.1666 20.5335 15.1666Z" fill={selected ? "url(#paint0_linear_636_831)" : "#A3AED0"}/>
            </g>
            <defs>
                {
                    selected? ( 
                    <linearGradient id="paint0_linear_636_831" x1="5.8335" y1="5.83325" x2="22.1668" y2="22.1666" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FE4768"/>
                        <stop offset="1" stopColor="#4B2CFA"/>
                    </linearGradient>):(
                        <linearGradient id="paint0_linear_636_831" x1="5.8335" y1="5.83325" x2="22.1668" y2="22.1666" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#A3AED0"/>
                        </linearGradient>
                    )
                }
               
                <clipPath id="clip0_636_831">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}

 
