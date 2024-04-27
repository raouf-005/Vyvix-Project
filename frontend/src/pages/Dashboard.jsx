import Calender from "../dashboardcomponent/Calender"
import Chart1 from "../dashboardcomponent/Chart1"
import Chart2 from "../dashboardcomponent/Chart2"
import Pie from "../dashboardcomponent/Pie"
import Tasks from "../dashboardcomponent/Tasks"
import TopUser from "../rankingcomponent/TopUser"
import CheckTable from "../dashboardcomponent/CheckTable"
import '../styles/dashboard.css'
export default function DashBoard() {
    return (
        <div className="w-full ">
            <div>
                <Chart2/>
            </div>
            <div className="grid grid-cols-[28%,41%,27%]  justify-left gap-4  p-8 pl-4">
            <Tasks/>
            <CheckTable/>
            <Pie/>
           
            </div>
        </div>
   
    )
}

// <Calender/>