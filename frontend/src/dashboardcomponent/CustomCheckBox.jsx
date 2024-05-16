import { Checkbox, Image, cn } from "@nextui-org/react";
import threepoints from "../assets/threepoints.svg";
import CheckMark from "../assets/CheckMark.jsx";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../customHooks/Axios.jsx";

export default function CustomCheckbox({ children, ...props }) {
  let { goal_id, status, date, task, value } = props;

  useEffect(() => {


    const fetchTaskDone = async (isDone) => {
      try {
        const response = await axios.patch(
          `/api/plan/${goal_id}/task${isDone}done/${value}`,{},
          {
            withCredentials: true,
          }
        );
        const data = await response.json();
        console.log("data", data);
      } catch (error) {
        console.log("error", error);
      }
    };

    if (status === true) {
      fetchTaskDone('');
    } else {
      fetchTaskDone('un');
        }
      
    
  }, [status]);

  return (
    <Checkbox
      aria-label=""
      classNames={{
        base: cn(
          "inline-flex max-w-sm   bg-content1 dark:bg-carddm m-0",
          "hover:bg-content2 items-center justify-start",
          "cursor-pointer ",
          "data-[selected=true]:bg-slate-100 dark:data-[selected=true]:bg-bgdm"
        ),
        label: "w-[87%]",
      }}
      icon={<CheckMark />}
      radius="md"
      color="danger"
      {...props}
      id={value}
      isSelected={status}
      //  lineThrough={status}
    >
      <div className="flex justify-between items-center ">
        <span>{children}</span>
        <Image src={threepoints} className="min-w-6" />
      </div>
    </Checkbox>
  );
}
