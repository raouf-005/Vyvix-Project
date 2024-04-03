import NavBtn from "./NavBtn"
import VyvixLogo from "../assets/DashLogo.svg";
import { Image ,ButtonGroup} from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { PageContext } from "../pages/PagesContainer";
import  {useNavigate} from 'react-router-dom';
import {HomeImg ,ProfileImg, RankingImg} from '../assets/SideBarIcons';










export default function SideBar() {
    const {currentPage, setCurrentPage} = useContext(PageContext);
    const navigate =useNavigate();


    const handleClicked = (page) => { 
        setCurrentPage(page);     
    }
    useEffect(() => {
        
        navigate(`/${currentPage.toLowerCase()}`);
    },[currentPage])


    return (
        <nav className="min-w-60 bg-white min-h-screen">
            <div className="flex justify-center items-center py-8">
                <Image src={VyvixLogo} className="" />
            </div>
            <ButtonGroup className="flex flex-col items-start pl-5 gap-6">
                <NavBtn
                    name="Dashboard"
                    Icon={HomeImg}
            
                    currentPage={currentPage}
                    onClick={() => handleClicked("Dashboard")}
                />
                <NavBtn
                    name="Vyvix"
                    Icon={HomeImg}
                    currentPage={currentPage}
                    onClick={() => handleClicked("Vyvix")}
                />
                <NavBtn
                    name="Ranking"
                    Icon={RankingImg}
                 
                    currentPage={currentPage}
                    onClick={() => handleClicked("Ranking")}
                />
                <NavBtn
                    name="Profile"
                    Icon={ProfileImg}
                
                    currentPage={currentPage}
                    onClick={() => handleClicked("Profile")}
                />
            </ButtonGroup>
        </nav>
    );
}