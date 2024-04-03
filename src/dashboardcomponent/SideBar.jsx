import NavBtn from "./NavBtn"
import { Image ,ButtonGroup} from "@nextui-org/react";
import { useContext, useEffect } from "react";
import { PageContext } from "../pages/PagesContainer";
import  {useNavigate} from 'react-router-dom';
import {HomeImg ,ProfileImg, RankingImg,VyvixLogo} from '../assets/SideBarIcons';



//i will move it to different directory 






export default function SideBar({darkMode}) {
    const {currentPage, setCurrentPage} = useContext(PageContext);
    const navigate =useNavigate();


    const handleClicked = (page) => { 
        setCurrentPage(page);     
    }
    useEffect(() => {
        
        navigate(`/${currentPage.toLowerCase()}`);
    },[currentPage])


    return (
        <nav className="min-w-60 bg-white min-h-screen dark:bg-carddm dark:divide-y-[0.001rem] divide-current">
            <div className="flex justify-center items-center pb-2 pt-7  ">
                <VyvixLogo  darkMode={darkMode}/>
            </div>
            <ButtonGroup className="flex flex-col items-start pl-5 gap-6 pt-9">
                <NavBtn
                    name="Dashboard"
                    Icon={HomeImg}
            
                    currentPage={currentPage}
                    onClick={() => handleClicked("Dashboard")}
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