import React, {useCallback} from 'react';
import ProgressBar from './../ProgressBar';
import { Avatar,Button } from '@nextui-org/react';
import { Link, useNavigate } from 'react-router-dom';
export default function useRenderCellCompany(){

const renderCell=useCallback((user ,columnKey)=>{
    const cellValue =user[columnKey]
   // console.log('user',user.key)
   
    switch(columnKey){
        case 'status':
            return <ProgressBar value={cellValue}/>
        case 'name':
            return  (
                <Link to={`${user.key}`}  className="flex bg-transparent flex-row gap-3 items-center text-center hover:text-blue-800 cursor-pointer active:text-blue-800 "
                 
                >
                    <Avatar src={user.image} size='md'
                    
                    />
                    <div className="">{cellValue}</div>
                </Link>
            )
        default:
            return cellValue
    }
},[]);

return renderCell;
}