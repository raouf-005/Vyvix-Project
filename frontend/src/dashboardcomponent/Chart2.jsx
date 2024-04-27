import React from 'react';
import ReactApexChart from 'react-apexcharts';
import Calender from '../assets/Calender.svg';     
import TrueMark from '../assets/TrueMark.svg';
import Shadow from '../assets/Shadow.svg';
import { Avatar, Button ,Image} from '@nextui-org/react';
class Chart2 extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Goals',
          data: [4, 3, 10, 9, 29,13,14,13]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
             zoom: {
                  enabled: false
                },

          },
          
          stroke: {
            width: 5,
            curve: 'smooth'
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            lines:{
                show:false,
            },
            axisBorder:{
                show:false,
               
              },
              axisTicks:{
                show:false
              }
          },
          yaxis:{
            show:false
          },
          chart: {
            toolbar: {
              show: false,
            }
        },
        grid: {
            show:false,
          
          },
        tooltip:{
            followCursor:true,
            x: {
                show:false
            }
        },
        annotations: {
            points: [{
                x:'Apr',
                y: 9,
                marker: {
                  size: 5   ,
                  fillColor: '#fff',
                  strokeColor: 'red',
                  radius: 6,
                  cssClass: 'apexcharts-custom-class'
                },
                label: {
                  borderColor: '#FF4560',
                  offsetY: 0,
                  style: {
                    color: '#fff',
                    background: '#FF4560',
                    fontSize: '16px',
                    fontWight: '1rem'
                  },
            
                  text: 'Goals',
                }
              }]},
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              gradientToColors: [ '#f00a6d'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom:1,
              opacityTo: 1,
              stops: [0, 90, 100]
            },
          }
        },
      
      
      };
    }

  

    render() {
      return (
        <div  className="flex flex-row justify-center   gap-12">
  <div className="flex flex-row bg-white dark:bg-carddm rounded-2xl">

      <div className='mt-5 ml-5 flex flex-col gap-6 -mr-10'>
      <Button className=' justify-start px-2  text-slate-500  bg-slate-200 dark:bg- max-w-[109px] gap-2 text-left' startContent={ <img src={Calender}/>}>
          This
          <br />
           Month
      </Button>
      <div>
      <h1 className='text-black font-bold text-3xl dark:text-white'>
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
    <div className=' pr-4'>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={300}  width={550}/>
          </div>
          <div id="html-dist"></div>
    </div>
         
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
      );
    }
  }

  export default Chart2;


 