import React from "react";



export default function Counter({title ,counter,unit}) {
    return(
        <div>
            <h3 className="font-bold text-5xl bg-gradient-to-b from-rose-500  to-purple-700     bg-clip-text text-transparent">
                {counter+' '+unit}
            </h3>
            <p className="bg-gradient-to-r font-semibold text-xl from-rose-500  to-purple-700 bg-clip-text text-transparent">
               {title}
            </p>

        </div>

    )
}