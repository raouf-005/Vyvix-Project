
import React,{useContext, useEffect, useState} from 'react';
import {  CheckboxGroup,Checkbox,cn } from '@nextui-org/react';
import CustomCheckbox from './CustomCheckBox';
import { GoalsContext } from '../pages/PagesContainer';



const list = [
    {
        _id: 1,
        task: 'Buenos Aires',
        status: false,
        date: '2021-10-10',
       
    },
    {
        _id: 2,
        task: 'Sydney',
        status: false,
        date: '2021-10-10',
    },
    {
        _id: 3,
        task: 'San Francisco',
        status: false,
        date: '2021-10-10',
    },
    {
        _id: 4,
        task: 'London',
        status: true,
        date: '2021-10-10',
    },
    {
        _id: 5,
        task: 'Tokyo',
        status: true,
        date: '2021-10-10',
    },
];






export default function Tasks() {
    const { goals ,setGoals} = useContext(GoalsContext);
//maybe i will add only a condition if goals render tasks 
    const [tasks, setTasks] = useState(goals && goals.length > 0 ? goals[0].tasks : []);
    const [selected, setSelected] = useState([]);
  
    const selectAll = (e, list) => {
        
        if (e.target.checked) {
            setSelected(list.map((item) => item._id));
        } else {
            setSelected([]); 
        }
    };
// to ensure that it renders when the goal is recieved because at first it's undefiened
    useEffect(() => {
      if (goals && goals.length > 0) {
        setTasks(goals[0].tasks);
      }
    }, [goals]);

    useEffect(() => {
       
            setTasks((prevTasks) =>
                prevTasks.map((task) => {
                    if (selected.includes(task._id)) {
                        return { ...task, status: true };
                    } else {
                        return { ...task, status: false };
                    }
                })
            );
      
      
    }, [selected]);


    return (
        <div className='flex flex-col bg-white   rounded-3xl dark:bg-carddm dark:text-white p-4'>
            <Checkbox
                aria-label=''
                className='py-3 pl-3 mb-1 text-3xl  min-w-28 font-bold cursor-pointer  dark:bg-carddm dark:text-white'
                classNames={{
                    base: cn('text-3xl', 'cursor-pointer flex justify-around items-center'),
                }}
                size='lg'
                onChange={(e) => {
                    selectAll(e, tasks);
                }}
                isSelected={selected.length === tasks.length && tasks.length > 0}
            >
                Tasks
            </Checkbox>

            <CheckboxGroup
                classNames={{
                    base: 'min-w-[300px]',
                }}
                value={selected}
                onValueChange={setSelected}
                
                className='overflow-y-scroll h-80 scrollbar-hide'
            >
                {tasks.map((item) => (
                    item.task ?(//to handle the case where the task is empty caused by the api 
                    <CustomCheckbox key={item._id} value={item._id} {...item}>
                        {item.task}
                    </CustomCheckbox>
                    ):null
                ))}
            </CheckboxGroup>
        </div>
    );
}