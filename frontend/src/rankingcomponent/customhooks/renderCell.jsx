import React, {useCallback} from 'react';
import ProgressBar from './../ProgressBar';


export default function useRenderCell(){

const renderCell=useCallback((user ,columnKey)=>{
    const cellValue =user[columnKey]

    switch(columnKey){
        case 'status':
            return <ProgressBar value={cellValue}/>
        default:
            return cellValue
    }
},[]);

return renderCell;
}