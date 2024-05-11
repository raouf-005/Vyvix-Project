import React, { useState } from "react";
import FavoriteCard from "../favoritecomponent.jsx/FavoriteCard";




export default function Favorites (){
    const [liked ,setLiked] =useState(false)
    return(
        <div className="grid w-full grid-cols-3 gap-4 px-4 mt-10   ">
            <FavoriteCard liked={liked} setLiked={setLiked}/>
            <FavoriteCard  liked={liked} setLiked={setLiked}/>
            <FavoriteCard  liked={liked} setLiked={setLiked}/>
            <FavoriteCard  liked={liked} setLiked={setLiked}/>

        
        </div>
    )
}