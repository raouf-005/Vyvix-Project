
import React from 'react';





export default function NavBtn({name, Icon,currentPage, onClick}) {
    
    const selected = currentPage.toLowerCase() === name.toLowerCase();
    
    return (
        <button className={`items-center flex  relative gap-3 w-full   pl-3 py-3  rounded-lg `} onClick={onClick}>
                <Icon selected={selected} />
            <span className={` ${selected? 'text-black dark:text-white text-lg font-bold':'text-gray-600 dark:text-white font-medium  opacity-90'}`}>
                {name}
            </span>
            <div className={` ${selected? 'absolute':'hidden'}  transition  ease-in-out delay-75 w-1  rounded-3xl h-[90%] bg-gradient-to-b from-danger to-current right-0`}> 

            </div>
        </button>
    )

}