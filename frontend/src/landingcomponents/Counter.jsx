import React from "react";



export default function Counter({title ,counter,unit}) {
    return(
        <div className="flex flex-col">
            <h3 className="font-bold sm:text-5xl  mobile:text-xl bg-gradient-to-b from-rose-500  to-purple-700     bg-clip-text text-transparent">
                {counter+unit}
            </h3>
            <p className="bg-gradient-to-r font-semibold mobile:text-tiny sm:text-lg from-rose-500  to-purple-700 bg-clip-text text-transparent">
               {title}
            </p>

        </div>

    )
}