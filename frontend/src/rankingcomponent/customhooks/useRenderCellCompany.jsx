import React, {useCallback} from 'react';
import ProgressBar from './../ProgressBar';
import { Avatar } from '@nextui-org/react';
export default function useRenderCellCompany(){

const renderCell=useCallback((user ,columnKey)=>{
    const cellValue =user[columnKey]
 
    switch(columnKey){
        case 'status':
            return <ProgressBar value={cellValue}/>
        case 'name':
            return  (
                <div className="flex  flex-row gap-3 items-center text-center hover:text-blue-800 cursor-pointer active:text-blue-800 "
                    onClick={()=>{
                        //alert(user.key);
                    }}
                >
                    <Avatar src={user.image} size='md'
                    
                    />
                    <div className="">{cellValue}</div>
                </div>
            )
        default:
            return cellValue
    }
},[]);

return renderCell;
}