
import React from 'react'
import Chart2 from "../dashboardcomponent/Chart2"
import Pie from "../dashboardcomponent/Pie"
import Tasks from "../dashboardcomponent/Tasks"
import CheckTable from "../dashboardcomponent/CheckTable"
import '../styles/dashboard.css'


export default function DashBoard() {


    return (
        <div className="w-full">
            <div>
                <Chart2/>
            </div>
            <div className="grid grid-cols-[30%,40%,30%]  justify-center gap-3 p-8  px-3 mx-2">
            <Tasks/>
            <CheckTable/>
            <Pie/>
            </div>
        </div>
   
    )
}
