import Calender from "../dashboardcomponent/Calender"
import Chart1 from "../dashboardcomponent/Chart1"
import Pie from "../dashboardcomponent/Pie"
import Tasks from "../dashboardcomponent/Tasks"
import TopUser from "../rankingcomponent/TopUser"
import CheckTable from "../dashboardcomponent/CheckTable"
import '../styles/dashboard.css'
export default function DashBoard() {
    return (
        <div className="w-full">
            <Chart1/>
            <div className="grid grid-cols-2  justify-left gap-4  p-8">
            <Tasks/>
            <Pie/>
            <CheckTable/>
           
            </div>
        </div>
   
    )
}

// <Calender/>