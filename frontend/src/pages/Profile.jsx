import React, { useEffect } from "react";
import GeneralInfoCard from "../profilecomponent/GeneraInfoCard";
import GoalsCard from "../profilecomponent/GoalsCard";
import ProfileCard from "../profilecomponent/ProfileCard";
import { useParams } from "react-router-dom";
import axios from "../customHooks/Axios";


export default function Profile() {

  const { id } = useParams();
  let user = null;
useEffect(() => {
    user =fetchProfile();
  }, []);
  const fetchProfile = async () => {
    try {
      const response = await axios.get(`/user/${id}`,{
        withCredentials:true
      });
      const data = response.data;
      console.log(data);
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
      <div className="grid grid-cols-[37%,44%] gap-4 px-4 pr-7  justify-center  ">
        <GoalsCard />
        <GeneralInfoCard user={user} />
      </div>
    </div>
  );
}
