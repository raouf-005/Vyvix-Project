import React, { useState } from "react";
import FavoriteCard from "../favoritecomponent.jsx/FavoriteCard";




export default function Favorites (){
    



    return(
        <div className="grid w-full grid-cols-3 gap-4 px-4 mt-10   ">
            <FavoriteCard />
            <FavoriteCard  />
            <FavoriteCard/>
            <FavoriteCard  />

        
        </div>
    )
}