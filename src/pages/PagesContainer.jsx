
import SideBar from "../dashboardcomponent/SideBar";
import { createContext,useEffect,useState } from "react";
import Header from "../dashboardcomponent/Header";
import FooterPages from "../dashboardcomponent/FooterPages";


export const PageContext = createContext();

export default function PagesContainer({page ,name}) {
    const [currentPage, setCurrentPage] = useState(name);
    useEffect(()=>{
        setCurrentPage(name)
    },[name])
    
    return (
        <div className="flex flex-row bg-slate-100">
            <PageContext.Provider value={{currentPage,setCurrentPage}}>
            <SideBar />
            <div className="flex flex-col w-full">
                <Header/>
                {page}
                <FooterPages/>
            </div>
           
            </PageContext.Provider>
        </div>
    )
}