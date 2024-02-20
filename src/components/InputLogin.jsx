import React from "react";
import "../styles/Login.css"
export default function InputLogin ({type ,placeholder,name }){
    return(

        <div className="flex flex-col">
            <label htmlFor={name} className="labelInputLogin mb-3">{name}</label>
            <input type={type||'text'} id={name} name={name} placeholder={placeholder} className="inputLogin "/>
        </div>
        
    )

}