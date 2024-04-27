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

    return (
        <div className="grid grid-flow-col grid-cols-footer gap-4 sm:pt-14 sm:px-10 sm:pl-16">
            <div className="sm:pl-16 mobile:px-8">
                <Image src={LogoFooter} alt="Vyvix Logo" className="pl-6 mb-1" aria-label="" />
                <p className="max-w-44 text-md font-light">
                    Personalized guidance and goal tracking for every aspect of your life with Vyvix
                </p>
            </div>
            <div className="mobile:hidden grid-flow-col sm:grid">
                {footerlist.map((item, index) => {
                    return <FooterList {...item} key={index} />;
                })}
            </div>
            <div className="mobile:grid mobile:grid-flow-col sm:hidden">
                        <div  className="flex flex-col gap-2">
                            <h1 className="text-white text-lg font-semibold">{footerlist[2].title}</h1>
                            {footerlist[2].list.map((item, index) => {
                                return <p key={index} className="text-white text-sm font-light">
                                    {item}
                                </p>
                            })} 
                        </div>
            </div>
        </div>
    );

}