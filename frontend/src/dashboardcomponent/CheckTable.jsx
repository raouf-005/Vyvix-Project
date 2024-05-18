import React, { useContext, useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Button,
  Image,
} from "@nextui-org/react";
import threepoints from "../assets/threepoints.svg";
import { GoalsContext } from "../pages/PagesContainer";
import { Spinner } from "@nextui-org/react";

const columns = [
  {
    _id: "goal",
    label: "GOAL",
  },
  {
    _id: "points",
    label: "GOAL POINTS",
  },
  {
    _id: "progress",
    label: "PROGRESS",
  },
];

const CalculateGoalpoints = (goal) => {
  return goal.tasks.reduce((sum, task) => sum + task.point, 0);
};

const updatedGoals = (goals) => {
  return goals.map((goal) => {
    return {
      ...goal,
      points: CalculateGoalpoints(goal),
    };
  });
};

export default function App() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["2"]));
  const { goals, setGoals } = useContext(GoalsContext || []);
  const [arrived, setArrived] = useState(false);

  useEffect(() => {
    if (goals && goals.length > 0) {
      setArrived(true);
    }
  }, [goals]);

  return (
    <div className="bg-white flex-1  rounded-3xl py-5 px-3 text-black  flex flex-col gap-3 dark:text-white  dark:bg-carddm max-h-[400px]">
      <div className="flex justify-between ">
        <h3 className="text-black  font-bold text-2xl dark:text-white ">
          Check Tables
        </h3>
        <Button isIconOnly className="mr-4" aria-label="button">
          <Image src={threepoints} alt="threepoints" />
        </Button>
      </div>
      <Table
        isHeaderSticky
        aria-label='table'

        color="success"
        selectionMode="multiple"
        disabledKeys={["3", "4"]}
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        className="max-w-[600px]  border-none "
        shadow="none"
        classNames={{
          th: ["dark:bg-carddm bg-white dark:text-white ", "z-10 "],
          wrapper: "dark:text-white bg-transparent text-black p-0 shadow-none",
          table: "max-h-[500px]",
          base: "max-h-[500px]  overflow-y-scroll  scrollbar-hide ",
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column._id}>{column.label}</TableColumn>
          )}
        </TableHeader>
        {goals && goals.length > 0 ? (
          <TableBody
            items={updatedGoals(goals)}
            isLoading={!arrived}
            loadingContent={<Spinner label="Loading..." />}
          >
            {(item) => (
              <TableRow key={item._id}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(columnKey==='progress'?item.progress+'%':item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        ) : (
          <TableBody emptyContent={"No Goals to display."}>{[]}</TableBody>
        )}
      </Table>
    </div>
  );
}
