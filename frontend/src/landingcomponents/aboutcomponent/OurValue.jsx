import { Button } from "@nextui-org/react";
import ValueCard from "./ValueCard";
import Responsibility from '../../assets/Responsibilty.svg'
import TeamWork from '../../assets/TeamWork.svg'
import Innovation from '../../assets/Innovation.svg'
import Excellence from '../../assets/Excellence.svg'



const list = [
    {
        title: 'Innovation',
        description: 'Long established fact that a readed to will be distracted by the readable content of a page when looking at its layout',
        icon: Innovation
    },
    {
        title: 'Quality',
        description: 'We are committed to providing the best quality products and services.',
        icon: TeamWork
    },
    {
        title: 'Integrity',
        description: 'We are honest and transparent in everything we do.',
        icon: Responsibility
    },
    {
        title: 'Customer Focus',
        description: 'We are committed to providing the best customer experience.',
        icon: Excellence
    }
]






export default function OurValue (){
    return(
        <div className="flex items-center flex-col text-center ">
        <Button className=" bg-purple-100 py-8 px-8 font-bold text-black mb-6"
            size="lg" radius="full">
            Our Values
        </Button>
        <h1 className="text-black  sm:text-5xl mobile:text-3xl   leading-[60px] font-bold max-w-lg">
        The story and values behind our Team
        </h1>
            <div className="grid  grid-cols-2 grid-rows-2 gap-3  mt-14">
                {list.map((item, index) => (
                    <ValueCard key={index} title={item.title} description={item.description} icon={item.icon} />
                ))}
            </div>

        </div>


    )
}