
import React, { useState } from 'react'
import Chart2 from "../dashboardcomponent/Chart2"
import Pie from "../dashboardcomponent/Pie"
import Tasks from "../dashboardcomponent/Tasks"
import CheckTable from "../dashboardcomponent/CheckTable"
import '../styles/dashboard.css'
import axios from '../customHooks/Axios'
import { useEffect } from 'react'

export default function DashBoard() {

    const id =JSON.parse(atob(localStorage.getItem('auth'))).credentials._id
    const [user,setUser]=useState(null)
    const fetchUser = async () => {
        try {
          const response = await axios.get(`api/user/${id}`, {
            withCredentials: true,
          });
          const data =await response.data;
          setUser(data)
          localStorage.setItem('auth', btoa(JSON.stringify({credentials:data })));
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
    fetchUser()
}, []);




    return (
        <div className="w-full">    
            <div>
                <Chart2/>
            </div>
            <div className="grid grid-cols-[30%,40%,30%]  justify-center gap-3 p-8  px-3 mx-2">
            <Tasks/>
            <CheckTable/>
            <Pie />
            </div>
        </div>
   
    )
}
