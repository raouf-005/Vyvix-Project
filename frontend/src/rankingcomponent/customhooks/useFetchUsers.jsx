import {columns, users} from '../tabledata';
import {useAsyncList} from "@react-stately/data";
import axios from 'axios';

import React ,{useState} from 'react';



export default function useFetchUsers(){
  const [isLoading, setIsLoading] = useState(true);
     //i will add async get list 
    const list =useAsyncList({
        async load({signal}) {
           const res = await axios.get('api/usersRank',{
            withCredentials: true,
           });
           console.log(res);
           const  json = await res.json();
            setIsLoading(false);
            return {
              items: users,
            };
          },
          async sort({items, sortDescriptor}) {
            return {
              items: items.sort((a, b) => {
                let first = a[sortDescriptor.column];
                let second = b[sortDescriptor.column];
                let cmp = (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;
      
                if (sortDescriptor.direction === "descending") {
                  cmp *= -1;
                }
      
                return cmp;
              }),
            };
          },
        })

        return [list,isLoading];

}