import React, { useContext } from "react";
import "../styles/Login.css"
import { formvalue } from "../pages/Login";

export default function InputLogin ({type ,placeholder,name,formikfield }){

    const formik = useContext(formvalue)
    return(

        <div className="flex flex-col ml-1 ">
            <label htmlFor={name} className="labelInputLogin mb-2   ">{name+' :'}</label>
            <input type={type||'text'} id={name} name={name} placeholder={placeholder} className="inputLogin " {...formikfield}/>
            <div>
                {formik.touched[formikfield.name.toLowerCase()] && formik.errors[formikfield.name.toLowerCase()] ? (
                    <div className="text-red-500 text-xs mt-1 ">{formik.errors[formikfield.name.toLowerCase()]}</div>
                ) : null}
            </div>
        </div>
        
    )

}