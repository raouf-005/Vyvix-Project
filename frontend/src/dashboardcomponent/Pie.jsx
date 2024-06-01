import { PieChart } from "@mui/x-charts/PieChart";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  Image,
  DropdownItem,
  DropdownMenu,
} from "@nextui-org/react";
import { useState, useEffect, useContext } from "react";
import arrowdown from "../assets/arrowdown.svg";
import { GoalsContext } from "../pages/PagesContainer";

export default function Pie(props) {
  const user = props.user;
  // i need to fetch the user
  const [identifier, setIdentifier] = useState(null);
  const [id, setId] = useState(undefined);
  const [selectedOption, setSelectedOption] = useState(new Set(["monthly"]));
  const selectedOptionValue = Array.from(selectedOption)[0];
  const { goals, setGoals } = useContext(GoalsContext);
  const [countTasks, setCountTasks] = useState(0);

  /*   useEffect(() => {
    if (goals && goals.length > 0) {
      setCountTasks(
        goals.reduce((total, goal) => total + goal.tasks.length, 0)
      );
    }
  }, [goals]); */

  /// i will test the deisgn in the end to test the colour
  const authData = JSON.parse(atob(localStorage.getItem("auth")));
  const setUser = {
    Success: user?.Sucess ?? authData?.credentials?.Sucess ?? 0,
    Failure: user?.Failure ?? authData?.credentials?.Failure ?? 0,
    totaltasks: user?.totaltasks ?? authData?.credentials?.totaltasks ?? 0,
    active: (user?.totaltasks ?? authData?.credentials?.totaltasks ?? 0) - 
            (user?.Failure ?? authData?.credentials?.Failure ?? 0) - 
            (user?.Success ?? authData?.credentials?.Success ?? 0),
  };


  const items = [
    {
      id: "id_A",
      value:
        setUser?.Success || 0 
      ,
      label: "Success",
      color:
        localStorage.getItem("darkMode") === "true" ? "#FE4768" : "#4B2CFA",
    },
    {
      id: "id_B",
      value:
        setUser?.Failure || 0,
      label: "Failure",
      color:
        localStorage.getItem("darkMode") === "true" ? "#FE6C86" : "#9380FC",
    },
    {
      id: "id_C",
      value:
        setUser?.active ||0,
      label: "Active",
      color: localStorage.getItem("darkMode") === "true" ? "white" : "#DBD5FE",
    },
  ];

  const handleClick = (itemIdentifier, item) => {
    setId(item.id);
    setIdentifier(itemIdentifier);
  };

  const labelsMap = {
    monthly: "Monthly",
    yearly: "Yearly",
    daily: "Daily",
  };

  return (
    <div className="flex flex-col bg-white dark:bg-carddm   w-fit shadow-md  rounded-2xl p-5  min-w-[370px] ">
      <div className=" flex flex-row items-center  text-black  justify-between ">
        <h2 className="font-bold text-xl dark:text-white">Your Pie Chart</h2>

        <Dropdown placement="bottom-end" aria-label="Select Option">
          <DropdownTrigger>
            <Button className=" bg-transparent -ml-6" aria-label="button">
              {labelsMap[selectedOptionValue]}
              <Image src={arrowdown} aria-label="Arrow Down" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            aria-label="Merge options"
            selectedKeys={selectedOption}
            selectionMode="single"
            onSelectionChange={setSelectedOption}
            className="max-w-[300px]"
          >
            <DropdownItem key="monthly">{labelsMap["monthly"]}</DropdownItem>
            <DropdownItem key="yearly">{labelsMap["yearly"]}</DropdownItem>
            <DropdownItem key="daily">{labelsMap["daily"]}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className=" flex flex-col justify-center items-center">
        {items[0].value === 0 &&
        items[1].value === 0 &&
        items[2].value === 0 ? (
          <div className="flex flex-col items-center justify-center mb-[42px] py-12 gap-6">
            <h3 className="text-lg font-bold dark:text-white text-black">
              No Data to Display
            </h3>
            <p className="text-sm dark:text-gray-400 text-gray-500">
              No goals to see the Pie chart
            </p>
          </div>
        ) : (
          <PieChart
            aria-label="piechart"
            series={[
              {
                data: items,
                highlightScope: { faded: "global", highlighted: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -16,
                  color: "gray",
                },
                cx: 136,
                cy: 105,
              },
            ]}
            onClick={() => handleClick()}
            width={280}
            height={210}
            slotProps={{
              legend: { hidden: true },
            }}
          />
        )}
        <div className="mt-3 ">
          <div className=" flex rounded-3xl max-w-64 divide-x-2 h-[75px]  sm:w-[350px]   items-center dark:bg-bgdm  dark:shadow-sm shadow-lg  dark:shadow-slate-100/50 ">
            <Button
              radius="none"
              size="lg"
              aria-label="button"
              className="flex-1 flex gap-0 rounded-l-3xl h-full     bg-transparent flex-col"
            >
              <span className=" dark:text-slate-200 text-slate-500  text-sm flex flex-row  items-center gap-2 ">
                <div className="h-2 w-2 dark:bg-[#FE4768] bg-[#4B2CFA] rounded-full"></div>

                {items[0].label}
              </span>
              <span className=" font-bold ">
                {
                   ((items[0].value / setUser?.totaltasks) * 100).toFixed(2) + "%"
                 }
              </span>
            </Button>
            <Button
              radius="none"
              size="lg"
              className="flex-1 flex gap-0 rounded-r-3xl    h-full  bg-transparent flex-col"
              aria-label="button"
            >
              <span className=" dark:text-slate-200 text-slate-500  text-sm flex flex-row  items-center gap-2 ">
                <div className="h-2 w-2 dark:bg-[#FE6C86] bg-[#9380FC] rounded-full"></div>
                {items[1].label}
              </span>
              <span className=" font-bold ">
                {
                  ((items[1].value / setUser?.totaltasks) * 100).toFixed(2) + "%"
                  }
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
