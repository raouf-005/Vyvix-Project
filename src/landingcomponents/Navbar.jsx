import React from "react";
import landinglogo from './../assets/landinglogo.svg'
import "./../styles/landing.css"
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@nextui-org/react";



export const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  





export default function Navbar (){







    
    return(

        <nav className="flex lg:p-3  lg:gap-48 lg:flex-row sm:gap-3 sm:flex-col items-center justify-center">
            <div className=" " >
                <img src={landinglogo} alt="landinglogo" />
            </div>

            <ButtonGroup className="flex justify-center    " size="lg" radius="full"  >
                <Button className="pl-11 bg-gray-100/10 text-white h-16" onClick={handleClick("home")}>Home</Button>
                <Button className="px-12 bg-gray-100/10 text-white   h-16" onClick={handleClick("about")}>About</Button>
                <Button className=" bg-gray-100/10 text-white  h-16" onClick={handleClick("services")}>Servivces</Button>
                <Button className="px-12 bg-gray-100/10 text-white  h-16" onClick={handleClick("how-it-works")}>How it Works </Button>
                <Button className="pr-11 bg-gray-100/10 text-white  h-16" onClick={handleClick("download")}>Download </Button>   
                
            </ButtonGroup>
            <div className="items-center flex   ">
                <Link className=" bg-white  text-gradiant-to-r   from-pink-600 via-purple-900 to-purple-900 px-6   py-2 rounded-3xl" 
                to="/login"
                >Sign in</Link>
            </div>
            
        </nav>

    )
}