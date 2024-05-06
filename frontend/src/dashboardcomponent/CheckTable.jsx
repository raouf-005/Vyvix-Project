import React ,{useContext, useState,useEffect}from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue,Button,Image} from "@nextui-org/react";
import threepoints from '../assets/threepoints.svg';
import { GoalsContext} from "../pages/PagesContainer";
import {Spinner} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    goal: "Goal 1",
    progress: 30,
    date: new Date().toISOString(),
  },
  {
    key: "2",
    goal: "Goal 2",
    progress: 50,
    date:new Date().toISOString(),
  },
  {
    _id: "5",
    goal: "Goal 5",
    progress: 100,
    date:new Date().toISOString(),
  }

];

const columns = [
  {
    _id: "goal",
    label: "Goal",
  },
  {
    _id: "progress",
    label: "Progress",
  },
  {
    _id: "date",
    label: "Date",
  },
];

export default function App() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["2"]));
  const {goals ,setGoals} =useContext(GoalsContext|| [])
 

  useEffect(() => {
    if (goals && goals.length > 0) {
      setGoals(goals);
    }
  }, [goals]);
  return (

    <div className="bg-white flex-1  rounded-3xl py-5 px-3 text-black  flex flex-col gap-3 dark:text-white  dark:bg-carddm max-w-[800px]">

          <div className="flex justify-between ">
                <h3 className='text-black  font-bold text-2xl dark:text-white '>Check Tables</h3>
              <Button isIconOnly  className='mr-4'>
                      <Image src={threepoints}/>
              </Button>
          </div> 
          <Table
          color="success"
          selectionMode="multiple"
          disabledKeys={["3", "4"]}
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
          className="max-w-[600px]  border-none "
          classNames={{
            th: ["bg-transparent"],
            wrapper: "dark:text-white bg-transparent text-black p-0 shadow-none",
          }}
          
          >
          <TableHeader columns={columns}>
            {(column) => <TableColumn key={column._id}>{column.label}</TableColumn>}
          </TableHeader>
        {goals ? (
          <TableBody
           items={goals}
           isLoading={!goals}>
            {(item) => (
              <TableRow key={item._id}>
                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
      
    ) : (
         <TableBody emptyContent={"No Goals to display."}/>

      )}
      </Table>
        </div>
  );
}
