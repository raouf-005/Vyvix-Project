import { BreadcrumbItem ,Breadcrumbs,Input,Image,Avatar } from "@nextui-org/react"
import SearchIcon from '../assets/SearchIcon.svg';
import NotificationIcon from '../assets/NotificationIcon.svg';
import { useContext } from "react";
import { PageContext } from "../pages/PagesContainer";
export default function Header() {  
const {currentPage, setCurrentPage} = useContext(PageContext);  
    return (
        <header className="   py-7 px-6">
            <div className="flex justify-between items-center">
                <div className="">
                    <Breadcrumbs
                    separator="/"
                    itemClasses={{
                    separator: "pr-1"
                    }} >
                    <BreadcrumbItem>Pages</BreadcrumbItem>
                    <BreadcrumbItem>{currentPage}</BreadcrumbItem>
                </Breadcrumbs>
                <h1 className="text-black text-4xl  font-bold max-w-md">
                        {currentPage.toLowerCase()==="dashboard" ?'Main Dashboard':currentPage}
                    </h1>
                </div>
               <div className=" min-w-[450px] py-2 rounded-full px-3 bg-white flex   justify-between items-center">
                <Input
                    size="sm"
                    radius="full"
                 
                    placeholder="Search..."
                    classNames={{
                        inputWrapper: ["bg-gray-200"],
                        input: ["text-md"]
                    }}
                    className="max-w-80"
                
                    startContent={
                        <img src={SearchIcon} alt="Search Icon" className="pr-2 pl-3 w-9"/>
                    }
                />
               
                    <Image src={NotificationIcon} alt="Notification Icon" width={28} height={28} className=" active:bg-slate-300 "/>
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="md"  />
                
                 
               </div>
            </div>
        </header>
        )
}