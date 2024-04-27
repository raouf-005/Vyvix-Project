import { Avatar, Button ,Image} from '@nextui-org/react';
import { LineChart } from '@mui/x-charts/LineChart';
import Calender from '../assets/Calender.svg';     
import TrueMark from '../assets/TrueMark.svg';
import Shadow from '../assets/Shadow.svg';

const GData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const PData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];











export default function Chart1() {
    return (
        <div  className="flex flex-row justify-center   gap-12">
            <div className="flex flex-row bg-white rounded-2xl">

                <div className='mt-5 ml-5 flex flex-col gap-6 -mr-10'>
                <Button className=' justify-start px-2  text-slate-500  bg-slate-200 max-w-[109px] gap-2 text-left' startContent={ <img src={Calender}/>}>
                    This
                    <br />
                     Month
                </Button>
                <div>
                <h1 className='text-black font-bold text-3xl'>
                    7 Goals
                </h1>
                <p className='text-slate-400 text-sm '>
                    Total progress 
                    <span className='  text-green-400 font-semibold ml-1'>
                        +2.45%
                    </span>
                </p>
                </div>
                    <div className=' text-green-400 flex  items-center gap-1 font-bold'>
                        <Image src={TrueMark}/>
                        On track
                    </div>
                </div>
              
                    <LineChart
                    leftAxis={null}
                 
                    width={550}
                    height={300}
                    series={[
                        { data: PData, label: 'Goal',showMark:false,color:"red" },
                        { data: GData, label: 'Progress',showMark:false     },
                    ]}
                    slotProps={{ legend: { hidden: true } }}
                    xAxis={[{ scaleType: 'point', data: xLabels  }]}
                    />
            </div>
           <div className="flex flex-col justify-center gap-4">
    
                    <Button size='lg' startContent={ <Avatar size="lg" src={Shadow}  className='-ml-3'/>} className='text-start py-9  dark:bg-carddm bg-white pr-14  text-slate-400 font-semibold'>
                    <div className=' flex flex-col'>
                            <span className='text-sm'>
                            Total tasks   
                            </span>    
                            <span className='text-black font-bold text-xl dark:text-white -mt-1'>
                            154
                            </span>
                    </div>
                        
                    </Button>
                    <Button size='lg' className='text-start py-9 pr-14 text-slate-400  bg-white font-semibold dark:bg-carddm' startContent={<Avatar size="lg" src={Shadow} className='-ml-3'  />}>
                            <div className=' flex flex-col'>
                                    <span className='text-sm'>
                                    Total Goals    
                                    </span>    
                                    <span className='text-black font-bold text-xl dark:text-white -mt-1'>
                                    12
                                    </span>
                            </div>
                    </Button>
           </div>
            
        </div>
    )
}