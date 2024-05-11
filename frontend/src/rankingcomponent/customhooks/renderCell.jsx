import React, {useCallback} from 'react';
import ProgressBar from './../ProgressBar';
import { Avatar } from '@nextui-org/react';
export default function useRenderCell(){

const renderCell=useCallback((user ,columnKey)=>{
    const cellValue =user[columnKey]

    switch(columnKey){
        case 'status':
            return <ProgressBar value={cellValue}/>
        case 'name':
            return  (
                <div className="flex  flex-row gap-3 items-center text-center">
                    <Avatar src={user.avatar} size='sm'  />
                    <div className="">{cellValue}</div>
                </div>
            )
        default:
            return cellValue
    }
},[]);

return renderCell;
}