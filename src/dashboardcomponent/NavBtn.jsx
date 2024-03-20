import HomeImg from '../assets/HomeImg.svg';
import { Image } from '@nextui-org/react';





export default function NavBtn({name, img, currentPage , onClick}) {
    const activated = currentPage.toLowerCase() === name.toLowerCase();
    return (
        <button className={`items-center flex  gap-4 w-[83%]   pl-3 py-3  rounded-lg font-semibold`} onClick={onClick}>
            <Image src={HomeImg} className={`${activated?'grayscale-0':' grayscale-[92%]'}`} width={30}/>
            <span className={` ${activated? 'text-black':'text-gray-600  opacity-90'}`}>
                {name}
            </span>
            
        </button>
    )

}