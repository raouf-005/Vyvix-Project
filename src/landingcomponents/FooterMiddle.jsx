import { Image } from "@nextui-org/react";
import FooterList from "./FooterList";
import LogoFooter from "./../assets/LogoFooter.svg";
const footerlist=[
    {
        title:"Navigation Links"
        ,list:['Home','Services','How It Works','Get Started','Contact Us']
    },   
    {
        title:"Resources"
        ,list:['Blog','FAQ']
    },
    {
        title:"Follow Us"
        ,list:['LinkedIn','Twitter']
    },
    {
        title:"Contact"
        ,list:['info@vyvix.com','(123) 456-7890']
    },

]



export default function FooterMiddle (){

    return(
        <div className="grid grid-flow-col grid-cols-footer gap-4 pt-14 px-10 pl-16">
            <div className="pl-16"> 
            <Image src={LogoFooter} alt="Vyvix Logo"   className="pl-6 mb-1"/>
            <p className= "  max-w-44 text-md font-light ">
            Personalized guidance 
            and goal tracking for 
            every aspect of your life
             with Vyvix
                
            </p>
            </div>
            <div className=" grid grid-flow-col ">

            {footerlist.map((item ,index)=>{
                return(
                    <FooterList {...item} key={index} />
                )
            
                })
             }
     
            </div>
            


        </div>
    )

}