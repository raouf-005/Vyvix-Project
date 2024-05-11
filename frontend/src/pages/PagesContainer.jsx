import SideBar from "../dashboardcomponent/SideBar";
import { createContext, useEffect, useState } from "react";
import Header from "../dashboardcomponent/Header";
import FooterPages from "../dashboardcomponent/FooterPages";
import axios from "../customHooks/Axios";
export const PageContext = createContext();
export const GoalsContext = createContext([]);

export default function PagesContainer({ page, name }) {
  const [currentPage, setCurrentPage] = useState(name);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    setCurrentPage(name);
  }, [name]);

  useEffect(() => {
    const getGoals = async () => {
      try {
        const response = await axios.get("/api/plan", {
          withCredentials: true,
        
        });
        const data = await response.data;
      
        setGoals(data || []); // Set goals to an empty array if data is undefined
      } catch (error) {
        console.log(error);
      }
    };

    getGoals();
  }, []);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="flex  flex-row bg-slate-100  dark:bg-indigo-950 ">
        <PageContext.Provider
          value={{ currentPage, setCurrentPage, darkMode, setDarkMode }}
        >
          <GoalsContext.Provider value={{ goals, setGoals }}>
            <SideBar darkMode={darkMode} />

            <div className="flex flex-col w-full">
              <Header />
              {page}
              <FooterPages />
            </div>
          </GoalsContext.Provider>
        </PageContext.Provider>
      </div>
    </div>
  );
}
