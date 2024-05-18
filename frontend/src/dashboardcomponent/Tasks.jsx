
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

function formatDate(date) {
    // Get the day, month, and year
    const  year = date.getFullYear();
    const  month = date.getMonth() + 1; // Add 1 to convert zero-based month to human-readable month
    const  day =date.getDate();

    // Format month and day to have leading zeros if necessary
    //const  formattedMonth = month < 10 ? "0" + month : month;
    const formattedMonth = month;
    const  formattedDay = day < 10 ? "0" + day : day;
    
    // Construct the date string in the desired format
    const dateString = year + "/" + formattedMonth + "/" + formattedDay;

    return dateString
}




export default function Tasks() {
    const { goals ,setGoals} = useContext(GoalsContext);
//maybe i will add only a condition if goals render tasks 
    const [tasks, setTasks] = useState([]);
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
        
        let currentDate = new Date();
        
        let formattedDate = formatDate(currentDate);
       // console.log("current date",formattedDate); 
      if (goals && goals.length > 0) {

    const todayTasks = goals.reduce((acc, goal) => {
        const todayTasks = goal.tasks.filter(task =>task.date === formattedDate);// give an exemple of it 
        return [...acc, ...todayTasks.map(task => ({ ...task, goal_id: goal._id }))];
    }, []);
    setTasks(todayTasks);
    todayTasks.length > 0 ? setSelected(todayTasks.filter((task) => task.status===true).map((task) => task._id)) : setSelected([]);
        }  
        


    }, [goals]);

     useEffect(() => {
       
            setTasks((prevTasks) =>
                prevTasks.map((task) => {
                    console.log("task",task);
                    if (selected.includes(task._id)||task.status===true) {
                        return { ...task, status: true };
                    } else {
                        return { ...task, status: false };
                    }
                })
            );
      
    }, [selected]); 

//linking with the backend
    return (
        <div className='flex flex-col bg-white relative   rounded-3xl dark:bg-carddm dark:text-white p-4'>
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
               Today Tasks
            </Checkbox>

            <CheckboxGroup
                classNames={{
                  
                }}
                value={selected}
                onValueChange={setSelected}
                
                className='overflow-y-scroll h-80 scrollbar-hide'
            >
                {tasks&& tasks.length>0?tasks.map((item) => (
                    item.task ?(//to handle the case where the task is empty caused by the api 
                    <CustomCheckbox  key={item._id} value={item._id} {...item}>
                        {item.task}
                    </CustomCheckbox>
                    ):null
                )):<p className='text-center mt-12 text-black dark:text-white  text-xl '>No tasks for today</p>
                }
            </CheckboxGroup>
        
        </div>
    );
}