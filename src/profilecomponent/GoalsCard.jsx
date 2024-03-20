import React from 'react';
import { List} from '@mui/material';

import ItemList from './ItemList';

export default function GoalsCard() {
    return (
        <div className=" bg-white  rounded-3xl p-5 px-6 text-slate-400 text-sm ">
            <h3 className=' bg-gradient-to-r from-danger to-primary bg-clip-text text-transparent font-bold text-2xl mb-4'>All Goals</h3>
            <p>
            Here you can find more details about your Goals. 
            Keep you user engaged by providing meaningful information.
            </p>
            <List dense={true} >
              
                <ItemList/>
                <ItemList/>
                <ItemList/>
                
             
            </List>
        </div>
    )
}


