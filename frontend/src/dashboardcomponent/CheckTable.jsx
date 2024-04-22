import React ,{useState}from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue,Button,Image} from "@nextui-org/react";
import threepoints from '../assets/threepoints.svg';

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
    key: "5",
    goal: "Goal 5",
    progress: 100,
    date:new Date().toISOString(),
  }

];

const columns = [
  {
    key: "goal",
    label: "Goal",
  },
  {
    key: "progress",
    label: "Progress",
  },
  {
    key: "date",
    label: "Date",
  },
];

export default function App() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["2"]));

  return (

    <div className="bg-white flex-1  rounded-3xl p-5 px-6 text-black  flex flex-col gap-3 dark:text-white  dark:bg-carddm max-w-[800px]">

          <div className="flex justify-between ">
                <h3 className='text-black  font-bold text-2xl dark:text-white '>Check Tables</h3>
              <Button isIconOnly  className='mr-4'>
                      <Image src={threepoints}/>
              </Button>
          </div> 
    <Table 
      color='danger'
      aria-label="Controlled table example with dynamic content"
      selectionMode="multiple"
      disabledKeys={["3", "4"]}
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      className="max-w-[600px]  border-none"
      classNames={{
            th:["bg-transparent"],
            }}
      >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell >{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
        </div>
  );
}
