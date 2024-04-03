
import SideBar from "../dashboardcomponent/SideBar";
import { createContext,useEffect,useState } from "react";
import Header from "../dashboardcomponent/Header";
import FooterPages from "../dashboardcomponent/FooterPages";

export const PageContext = createContext();

export default function PagesContainer({page ,name}) {
    const [currentPage, setCurrentPage] = useState(name);
    const [darkMode,setDarkMode] =useState(false)
    
    useEffect(()=>{
        setCurrentPage(name)
    },[name])
    




    return (
     
        <div className={`${darkMode? 'dark':''}`}>
            <div className="flex  flex-row bg-slate-100  dark:bg-indigo-950 ">
                <PageContext.Provider value={{currentPage,setCurrentPage,darkMode,setDarkMode}}>
                <SideBar darkMode={darkMode}/> 
                <div className="flex flex-col w-full">
                    <Header/>
                    {page}
                    <FooterPages/>
                </div>
            
                </PageContext.Provider>
            </div>
        </div>
    )
}