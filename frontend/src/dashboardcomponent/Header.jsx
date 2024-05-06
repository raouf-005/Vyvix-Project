import { BreadcrumbItem ,Breadcrumbs,Input , Button} from "@nextui-org/react"
import DropdownProfile from "./DropdownProfile";
import { useContext } from "react";
import { PageContext } from "../pages/PagesContainer";
import {MoonIcon ,NotificationIcon,SupportIcon,SearchIcon} from '../assets/HeaderIcons'











export default function Header({setDark}) {  
const {currentPage, setCurrentPage,darkMode,setDarkMode} = useContext(PageContext); 

const toggleDarkMode=()=>{
    setDarkMode(prevdark => {
        const newDarkMode = !prevdark;
        localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
        return newDarkMode;
    });
}


return (
    <header className="py-7 px-6">
        <div className="flex justify-between items-center">
            <div className="">
                <Breadcrumbs
                    separator="/"
                    aria-label=""
                    itemClasses={{
                        separator: "pr-1",
                    }}
                >
                    <BreadcrumbItem>Pages</BreadcrumbItem>
                    <BreadcrumbItem>{currentPage}</BreadcrumbItem>
                </Breadcrumbs>
                <h1 className="text-black text-4xl font-bold max-w-md dark:text-white">
                    {currentPage.toLowerCase() === "dashboard"
                        ? "Main Dashboard"
                        : currentPage}
                </h1>
            </div>
            <div className="min-w-[430px] rounded-full p-2 bg-white flex dark:bg-carddm gap-1 items-center">
                <Input
                    size="sm"
                    radius="full"
                    aria-label=""
                    placeholder="Search..."
                    classNames={{
                        inputWrapper: ["bg-slate-100", "dark:bg-bgdm"],
                        input: ["text-md"],
                    }}
                    className="max-w-[55%] mr-3"
                    startContent={<SearchIcon alt="Search Icon" dark={darkMode} />}
                />

                <Button isIconOnly className="rounded-full bg-transparent">
                    <NotificationIcon alt="Notification Icon" dark={darkMode} />
                </Button>
                <Button
                    isIconOnly
                    className="rounded-full bg-transparent"
                    onClick={() => toggleDarkMode()}
                >
                    <MoonIcon alt="Moon Icon" dark={darkMode} />
                </Button>
                <Button isIconOnly className="rounded-full bg-transparent">
                    <SupportIcon alt="Support Icon" dark={darkMode} />
                </Button>
              <DropdownProfile />
            </div>
        </div>
    </header>
);
}