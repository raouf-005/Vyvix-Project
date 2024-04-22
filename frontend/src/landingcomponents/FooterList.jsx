import React from "react";
import { handleClick } from "./Navbar";
import { useNavigate } from "react-router-dom";




export default function FooterList ({title , list}){
    const navigate=useNavigate();
    const handleLinks = (item) => () => {
        if (item.toLowerCase().replace(/\s/g,'') === 'contactus') {
            navigate('/contactus')
        }
        if (item.toLowerCase().replace(/\s/g,'') === 'getstarted') {
            navigate('/register')
        }
        //handle click improted didn't work 
        const anchor = item.toLowerCase().replace(/\s/g, '');
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
    

    return(
        <div className="flex flex-col gap-2 mb-10">
            <h3 className="text-lg    mb-4">{title}</h3>
            <ul className="flex flex-col gap-7 ">
                {list.map((item , index) => {
                    return (
                        <li key={index} className="text-sm font-light cursor-pointer" onClick={handleLinks(item.toLowerCase().replace(/\s/g, ''))   }>
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}