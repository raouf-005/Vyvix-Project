import edit from "../assets/edit.svg";
import Done from "../assets/Done.svg";
import Close from "../assets/Close.svg";
import blockchain from "../assets/blockchain.svg";
import { ListItem, ListItemAvatar, ListItemText, Avatar } from "@mui/material";
import React, { useContext, useState } from "react";
import axios from "../customHooks/Axios";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  ButtonGroup,
  Button,
  Image,
} from "@nextui-org/react";
export default function ItemList(props) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" ? true : false
  );
  const [nameLogic, setNamelogic] = useState(props.name || "");
  const [isInput, setIsInput] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const deleteGoal = async (id) => {
    try {
      const response = await axios.delete(`/api/plan/${id}`, {
        withCredentials: true,
      });
    } catch (error) {
      console.error(error);
    }

    const newGoals = props.goallist.filter((goal) => goal._id !== id);
    props.setGoalList(newGoals);
  };

  const changeNameGoal = async (id, name) => {
    try {
      const response = await axios.patch(
        `/api/plan/${id}/rename`,
        {goal: nameLogic},
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      console.error("rename", error);
    }
  };

  return (
    <ListItem
      sx={{ paddingBlock: 1, marginTop: 2 }}
      className="rounded-2xl  dark:shadow-lg shadow-md dark:bg-ltdm  ease-soft-spring"
      secondaryAction={
        <Popover
          offset={-5}
          placement="top"
          isOpen={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
        >
          <PopoverTrigger>
            <Button
              isIconOnly
              aria-label="edit"
              className="bg-transparent"
              size="md"
            >
              <Image src={edit} className="w-5 " />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0">
            <ButtonGroup
              className={` divide-x-1  rounded-md ${
                darkMode ? "bg-carddm    divide-slate-500 " : " "
              } overflow-hidden`}
              size="md"
            >
              <Button
                className={`py-8 w-8  flex flex-col  -gap-3 -mt-1 ${
                  darkMode ? "text-white " : "text-slate-300 "
                }  bg-transparent text-sm`}
                onClick={() => {
                  setIsOpen(false);
                  deleteGoal(props.id);
                }}
              >
                <Image src={Close} className="w-7  " />
                Fail
              </Button>
              <Button
                className={`py-8 w-8 bg-transparent flex flex-col -gap-3 -mt-1 ${
                  darkMode ? "text-white " : "text-slate-300 "
                } text-tiny`}
                onClick={() => {
                  setIsOpen(false);
                  setIsInput(true);
                }}
              >
                <Image src={Done} className="w-7 " />
                Change <br /> Name
              </Button>
            </ButtonGroup>
          </PopoverContent>
        </Popover>
      }
    >
      <ListItemAvatar>
        <Avatar
          variant="rounded"
          className="mr-4 m-1"
          sx={{ width: 57, height: 57, bgcolor: "transparent" }}
        >
          <Image src={props.img || blockchain} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          isInput ? (
            <input
              type="text"
              className={`text-lg ${
                isInput
                  ? "shadow-sm shadow-slate-100 border-purple-800  border-1"
                  : ""
              } pl-3 -ml-3 rounded-lg bg-gradient-to-r from-danger to-primary bg-clip-text text-transparent font-semibold`}
              defaultValue={nameLogic}
              onChange={(e) => setNamelogic(e.target.value)}
              onBlur={() => {
                setIsInput(false);
                changeNameGoal(props.id, nameLogic);
              }}
            />
          ) : (
            <h2 className="text-lg  bg-gradient-to-r from-danger to-primary bg-clip-text text-transparent font-semibold">
              {nameLogic || "Single line "}
            </h2>
          )
        }
        secondary={
          <span className="text-slate-400 text-sm">
            {`Goal ${props.index + 1}` || "Goal 1"}{" "}
          </span>
        }
      />
    </ListItem>
  );
}
