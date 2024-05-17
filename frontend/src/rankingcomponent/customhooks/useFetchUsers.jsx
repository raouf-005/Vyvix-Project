//import {columns, users} from '../tabledata';
import {useAsyncList} from "@react-stately/data";
import axios from '../../customHooks/Axios';

import React ,{useState} from 'react';
import { image } from "@nextui-org/react";



export default function useFetchUsers(){
  const [isLoading, setIsLoading] = useState(true);
     //i will add async get list 
    const list =useAsyncList({
        async load({signal}) {
           const res = await axios.get('api/usersRank',{
            withCredentials: true,
           });
           


           const  data = await res.data?.users;

           const usersrank = data.map((user) => {
             return {
                key: user._id,
               name: user?.username||'',
               points: user.points||0,
               status: user.progresse,
               email: user.email||"no email",
               phone: user.phonenumber||"no phone",
               image: user.image||"",
               //https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png
             };
            }); 

            
            setIsLoading(false);
            return {
              items: usersrank,
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