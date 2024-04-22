import {columns, users} from '../tabledata';
import {useAsyncList} from "@react-stately/data";

import React ,{useState} from 'react';



export default function useFetchUsers(){
  const [isLoading, setIsLoading] = useState(true);
     //i will add async get list 
    let list =useAsyncList({
        async load({signal}) {
        //    let res = await fetch('https://swapi.py4e.com/api/people/?search', {
        //      signal,
        //    });
        //    let json = await res.json();
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