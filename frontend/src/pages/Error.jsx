import Navbar from "../landingcomponents/Navbar";
import ErrorBody from "../errorcomponents/ErrorBody";
import React from "react";
import ErrorBg from "./../assets/ErrorBg.svg";
import ErrorFooter from "../errorcomponents/ErrorFooter";


export default function Error() {

    return(
        <div className="flex flex-col">
            <ErrorBody/>
            <ErrorFooter/>
            <div>
                <img src={ErrorBg} alt="" className="absolute -top-10 w-full" />
            </div>
        </div>

    )
}   