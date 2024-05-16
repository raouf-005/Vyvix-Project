import React, { useEffect } from 'react';
import {List} from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useContext ,useState } from 'react';
import ItemList from './ItemList';
import { GoalsContext } from '../pages/PagesContainer';
export default function GoalsCard() {
    
    const {goals ,setGoals} = useContext(GoalsContext);
    const [goallist,setGoalList] = useState(goals||[]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        setGoalList(goals);
        setTimeout(() =>
        setLoading(false)
        , 1000);
    }, [goals])
    
    return (
        <div className=" bg-white relative rounded-3xl p-5 px-6 text-slate-400 text-sm dark:bg-carddm shadow-sm ">
            <h3 className=' bg-gradient-to-r from-danger to-primary bg-clip-text text-transparent font-bold text-2xl mb-4'>All Goals</h3>
            <p>
            Here you can find more details about your Goals. 
            Keep you user engaged by providing meaningful information.
            </p>
            
            {
                loading?(<div className="text-center text-2xl  mt-14    ">Loading...</div>):goallist && goallist.length >0?(<List dense={true} aria-label="" sx={{overflow:'auto', maxHeight:'350px',marginBottom:'10px'}} >
                {
                    goallist.map((goal,index) => (
                        <ItemList name={goal.goal} id={goal._id} key={goal._id} index={index}  goallist={goallist} setGoalList={setGoalList}/>
                    ))
                }
            </List>):<div className="text-center text-2xl  mt-14    ">No Goals to Display</div>
            }
     
        </div>
    )
}


