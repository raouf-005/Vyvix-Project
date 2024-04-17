import Calender from "../dashboardcomponent/Calender"
import Chart1 from "../dashboardcomponent/Chart1"
import Pie from "../dashboardcomponent/Pie"
import TopUser from "../rankingcomponent/TopUser"
import '../styles/dashboard.css'
export default function DashBoard() {
    return (
        <div className="w-full">
            <Chart1/>
            <div className="grid grid-cols-[30%,30%,40%]  justify-left gap-4  p-8">
            <Pie/>
            <TopUser />
            </div>
           
        </div>
   
    )
}

// <Calender/>