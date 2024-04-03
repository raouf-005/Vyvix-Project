import Calender from "../dashboardcomponent/Calender"
import Chart1 from "../dashboardcomponent/Chart1"
import '../styles/dashboard.css'
export default function DashBoard() {
    return (
        <div className="w-full bg-slate-200">
            <Chart1/>
            <Calender/>
        </div>
   
    )
}