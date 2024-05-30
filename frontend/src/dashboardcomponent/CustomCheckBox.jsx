import { Checkbox, Image, cn } from "@nextui-org/react";
import threepoints from "../assets/threepoints.svg";
import CheckMark from "../assets/CheckMark.jsx";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../customHooks/Axios.jsx";

export default function CustomCheckbox({ children, ...props }) {
  let { goal_id, status, value,all,none,checked } = props;
 
  const [selected, setSelected] = useState(status==='true'?true:false);    

  useEffect(() => {


    const fetchTaskDone = async (isDone) => {
      try {
        const response = await axios.patch(
          `/api/plan/${goal_id}/task${isDone}done/${value}`,{},
          {
            withCredentials: true,
          }
        );
        const data = await response.data;
      } catch (error) {
        console.log("error", error);
      }
    };
if(goal_id && value){
    if (selected === true  && status === 'false' ) {
    
      fetchTaskDone('');
    } else  if (selected === false && status === 'true') {    
      fetchTaskDone('un');
        }
      }
      if(none==='true' && selected === true){        
      fetchTaskDone('un');
     
      }
      if(all==='true' && selected === false){
        fetchTaskDone('');
      }
    
  }, [selected,none,all]);

  return (
    <Checkbox
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
      isSelected={selected}
      aria-labelledby={value}
      onValueChange={setSelected}
    >
      <div className="flex justify-between items-center ">
        <span>{children}</span>
        <Image src={threepoints} className="min-w-6" alt="image" aria-label=""/>
      </div>
    </Checkbox>
  );
}
