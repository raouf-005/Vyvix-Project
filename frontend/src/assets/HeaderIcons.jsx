import React from "react";



export const NotificationIcon=({dark})=>{
    return(
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_545_7055)">
        <path d="M19.2901 17.29L18.0001 16V11C18.0001 7.93 16.3601 5.36 13.5001 4.68V4C13.5001 3.17 12.8301 2.5 12.0001 2.5C11.1701 2.5 10.5001 3.17 10.5001 4V4.68C7.63005 5.36 6.00005 7.92 6.00005 11V16L4.71005 17.29C4.08005 17.92 4.52005 19 5.41005 19H18.5801C19.4801 19 19.9201 17.92 19.2901 17.29ZM16.0001 17H8.00005V11C8.00005 8.52 9.51005 6.5 12.0001 6.5C14.4901 6.5 16.0001 8.52 16.0001 11V17ZM12.0001 22C13.1001 22 14.0001 21.1 14.0001 20H10.0001C10.0001 21.1 10.8901 22 12.0001 22Z" 
        fill={dark?'white':'#A3AED0'}/>
        </g>
        <defs>
            <clipPath id="clip0_545_7055">
            <rect width="24" height="24" fill="black"/>
            </clipPath>
        </defs>
    </svg>
    )
}

export const MoonIcon =({dark})=>{
    return(
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_661_186)">
            <path d="M9.95703 18C12.733 18 15.2684 16.737 16.9481 14.6675C17.1966 14.3613 16.9256 13.9141 16.5416 13.9872C12.1751 14.8188 8.16522 11.4709 8.16522 7.06303C8.16522 4.52398 9.52444 2.18914 11.7335 0.931992C12.074 0.738211 11.9884 0.221941 11.6015 0.150469C11.059 0.0504468 10.5086 8.21369e-05 9.95703 0C4.98914 0 0.957031 4.02578 0.957031 9C0.957031 13.9679 4.98281 18 9.95703 18Z"
             fill={dark?'white':'#A3AED0'}/>
            </g>
            <defs>
            <clipPath id="clip0_661_186">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
            </defs>
        </svg>

    )

}





export const SupportIcon=({dark})=>{
    return(
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5H11V7H9V5ZM10 15C10.55 15 11 14.55 11 14V10C11 9.45 10.55 9 10 9C9.45 9 9 9.45 9 10V14C9 14.55 9.45 15 10 15ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" 
        fill={dark?'white':'#A3AED0'}/>
    </svg>
    )
}

export const SearchIcon=({dark})=>{
    return(
        <svg width="14" height="16" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" className=" items-center ml-3 mr-2">
            <circle cx="5" cy="5" r="4.3" stroke={dark?'white':'#2B3674'} strokeWidth="1.4"/>
            <line x1="10.0101" y1="11" x2="8" y2="8.98995" stroke={dark?'white':'#2B3674'} strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
    )
}