import { PieChart } from '@mui/x-charts/PieChart';
import { Button, ButtonGroup, Dropdown, DropdownTrigger,Image,DropdownItem ,DropdownMenu} from '@nextui-org/react';
import {useState} from 'react'

import arrowdown from '../assets/arrowdown.svg'






export default function Pie (){
    const [identifier, setIdentifier] = useState(null);
    const [id, setId] = useState(undefined);
    const [selectedOption, setSelectedOption] = useState(new Set(["monthly"]));
    const selectedOptionValue = Array.from(selectedOption)[0];


    const items = [
        {id: 'id_A', value: 10, label: 'Success' ,color:'purple' },
        { id: 'id_B', value: 15, label: 'Failure',color:'blue' },
        { id: 'id_C', value: 20, label: 'Active' ,color:'gray'},
      ];
      
    const handleClick = (itemIdentifier, item) => {
      setId(item.id);
      setIdentifier(itemIdentifier);
    };

    const labelsMap = {
        monthly: "Monthly",
        yearly: "Yearly",
        daily: "Daily",
      }
   
   

    return(
        <div className='flex flex-col bg-white dark:bg-carddm   w-fit shadow-md  rounded-2xl p-5  min-w-[370px] '>
            <div className=' flex flex-row items-center  text-black  justify-between '>
                <h2 className='font-bold text-xl dark:text-white'>
                    Your Pie Chart 
                </h2>
                
                  
                <Dropdown placement='bottom-end'>
                    <DropdownTrigger>
                        <Button  className=' bg-transparent -ml-6'>
                        {labelsMap[selectedOptionValue]}
                         <Image src={arrowdown}/>
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        disallowEmptySelection
                        aria-label="Merge options"
                        selectedKeys={selectedOption}
                        selectionMode="single"
                        onSelectionChange={setSelectedOption}
                        className="max-w-[300px]"
                            >
                        <DropdownItem key="monthly">
                            {labelsMap["monthly"]}
                        </DropdownItem>
                        <DropdownItem key="yearly">
                           {labelsMap["yearly"]}
                        </DropdownItem>
                        <DropdownItem key="daily">
                           {labelsMap["daily"]}
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

            </div>
            <div className=' flex flex-col justify-center  items-center'>
                    <PieChart
                    series={[
                        {
                        data: items,
                        highlightScope: { faded: 'global', highlighted: 'item' },
                        cx: 136,
                        cy:105,
                        },
                    ]}  
                    onClick={()=>handleClick()}
                    width={280}
                    height={210}

                
                    slotProps={{
                        legend: { hidden: true },
                    }}
                    />
                <div className='mt-3'>
                    <div className=' flex rounded-3xl max-w-64 divide-x-2 shadow-md'>
                        <Button  radius="none" size='lg' className='flex-1 flex gap-0 rounded-l-3xl  bg-transparent flex-col'>
                            <span className=' text-slate-200 text-sm'>
                            {items[0].label}
                            </span> 
                            <span className=' font-bold '>
                            {items[0].value}
                            </span>
                        </Button>
                        <Button  radius='none' size='lg' className=' flex-1 flex gap-0 rounded-r-3xl bg-transparent flex-col'>
                            <span className='text-slate-200 text-sm'>
                                {items[1].label }
                            </span>
                            <span className=' font-bold  '>
                                {items[1].value}
                            </span>
                        </Button>
                    </div>
                   
                </div>
                   
            </div>
        
            

          
        </div>
    )
}