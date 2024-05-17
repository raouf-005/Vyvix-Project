import React, { useEffect, useState } from "react";
import GeneralInfoCard from "../profilecomponent/GeneraInfoCard";
import GoalsCard from "../profilecomponent/GoalsCard";
import ProfileCard from "../profilecomponent/ProfileCard";
import { useParams } from "react-router-dom";
import axios from "../customHooks/Axios";
import { PageContext } from "./PagesContainer";
import { useContext } from "react";
import Pie from "../dashboardcomponent/Pie";

export default function Profile() {

    const { id } = useParams();
 // const {currentPage,setCurrentPage} = useContext(PageContext);
        const [user , setUser] = useState(null);


useEffect(() => {
        //setCurrentPage(`/Profile/${id}`)
        fetchProfile()
    }, []);
  const fetchProfile = async () => {
    try {
      const response = await axios.get(`/api/user/${id}`,{
        withCredentials:true
      });
      const data = response.data;
      console.log(data);
      setUser(data)
      return data;
    } catch (error) {
      console.error(error);
    }
  
  };

  return (
    <div className="w-full gap-6 flex flex-col">
      <div className="flex flex-row justify-center items-end">
        <ProfileCard user={user} />
      </div>
      <div className="grid grid-cols-[33%,47%]  px-4 pr-7  justify-center  ">
       
       <div className="max-h-fit  justify-start flex  items-center  ">
        
        <Pie  user={user}/>
        </div> 
        <GeneralInfoCard user={user} />
      </div>    
    </div>
  );
}
