
import React,{useState} from 'react';
import {  CheckboxGroup,Checkbox,cn } from '@nextui-org/react';
import CustomCheckbox from './CustomCheckBox';


const list = [
    {
        id: 1,
        name: 'Buenos Aires',
        value: 'buenos-aires',
    },
    {
        id: 2,
        name: 'Sydney',
        value: 'sydney',
    },
    {
        id: 3,
        name: 'San Francisco',
        value: 'san-francisco',
    },
    {
        id: 4,
        name: 'London',
        value: 'london',
    },
    {
        id: 5,
        name: 'Tokyo',
        value: 'tokyo',
    },
];




export default function Tasks() {

    const [selected, setSelected] = useState([list[0].value, list[1].value]);

    const selectAll = (e, list) => {
        
        if (e.target.checked) {
            setSelected(list.map((item) => item.value));
        } else {
            setSelected([]);
        }
    };
        
   


    return (
        <div className='flex flex-col bg-white   rounded-3xl dark:bg-carddm dark:text-white p-4'>
        
            <Checkbox
            aria-label="" 
                className='py-3 pl-3 mb-1 text-3xl  min-w-28 font-bold cursor-pointer  dark:bg-carddm dark:text-white'
                classNames={{
                    base:cn(
                        "text-3xl",
                        "cursor-pointer flex justify-around items-center",

                    )
                }}
                size='lg'
                onChange={(e)=>{
                    selectAll(e,list)
                }}
                
            >
                    Tasks
            </Checkbox>

             <CheckboxGroup
                     classNames={{
                        base: "min-w-[300px]"
                      }}
                    
                    value={selected}
                    onValueChange={setSelected}
                >
                    {list.map((item) => (
                        <CustomCheckbox key={item.id} value={item.value}>
                            {item.name}
                        </CustomCheckbox>
                    ))}
                </CheckboxGroup>
        </div>
    )
}