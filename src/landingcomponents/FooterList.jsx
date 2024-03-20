import React from "react";





export default function FooterList ({title , list}){
    return(
        <div className="flex flex-col gap-2">
            <h3 className="text-lg    mb-4">{title}</h3>
            <ul className="flex flex-col gap-5 ">
                {list.map((item , index) => {
                    return(
                        <li key={index} className="text-sm font-light ">{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}