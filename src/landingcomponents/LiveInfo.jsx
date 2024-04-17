import Counter from "./Counter";
import { useState } from "react";





export default function LiveInfo(){

    const [counters, setCounters] = useState([
    {
        counter: 100,
        unit: "k",
        title: "Goal Achieved"
    },
    {
        counter: 100,
        unit: "h",
        title: "Progress Advance"
    },
    {   
        counter: 100,
        unit: "k+",
        title: "Users"

    },
    {
        counter: 100,
        unit: "+",
        title: "Companies"
    }])

    const updateCounter = (index, value) => {
        setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index].counter = value;
            if (newCounters[index].counter >= 1000000) {
                newCounters[index].unit = "m";
                newCounters[index].counter = newCounters[index].counter / 1000000;
            } else if (newCounters[index].counter >= 1000) {
                newCounters[index].unit = "k";
                newCounters[index].counter = newCounters[index].counter / 1000;
            } else {
                newCounters[index].unit = "";
                newCounters[index].counter = newCounters[index].counter;
            }
            return newCounters;
        });
    }

    return(
        <ul className="flex flex-row justify-evenly px-14">
            {counters.map((counter,index) => (
                <li key={index}>
                    <Counter {...counter} />
                </li>
            ))}
        </ul>
    )
}