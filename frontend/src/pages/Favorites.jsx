import React, { useEffect, useState } from "react";
import FavoriteCard from "../favoritecomponent.jsx/FavoriteCard";
import axios from "../customHooks/Axios";
import { Spinner } from "@nextui-org/react";

export default function Favorites() {

    const [favorites, setFavorites] = useState([]);
    const [isloading,setIsLoading]=useState(true)

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await axios.get("/api/usercompany/favorites",{
            withCredentials:true
        });
        console.log(res.data);
        setFavorites(res.data);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="grid w-full grid-cols-3 gap-4 px-4 mt-10  mb-40 ">
        {favorites  && favorites.length>0 ?  favorites.map((favorite) => (
            <FavoriteCard key={favorite._id} favorite={favorite} />
        )):isloading?
        <Spinner label="Loading ..." size="lg" className="  col-span-3 text-3xl p-20 dark:text-slate-200  text-carddm my-9"/>
        : <h1 className="text-center col-span-3 text-3xl p-20 dark:text-slate-200 text-carddm my-9">No favorites yet</h1>
        
        }
    </div>
  );
}
