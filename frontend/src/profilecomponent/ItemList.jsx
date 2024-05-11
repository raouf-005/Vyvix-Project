import edit from "../assets/edit.svg";
import Done from "../assets/Done.svg";
import Close from "../assets/Close.svg";
import blockchain from "../assets/blockchain.svg";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";

import { PageContext } from "../pages/PagesContainer";
import React ,{useContext ,useState} from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  ButtonGroup,
  Button,
  Image,
} from "@nextui-org/react";
export default function ItemList(props) {

    const [darkMode,setDarkMode] = useState(localStorage.getItem("darkMode") === "true" ? true : false);

  return (
    <ListItem
      sx={{ paddingBlock: 1, marginTop: 2 }}
      className="rounded-2xl  shadow-lg dark:bg-ltdm"
      secondaryAction={
        <Popover offset={-5} placement="top">
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
            <ButtonGroup className={` divide-x-1  rounded-md ${darkMode ? "bg-carddm    divide-slate-500 ": " "} overflow-hidden`}size="sm" >
              <Button className={`py-8 w-8  flex flex-col  -gap-3 -mt-1 ${darkMode ? "text-white ": "text-slate-300 "}  bg-transparent text-sm`}
                onClick={() => {}}
              >
                <Image src={Close} className="w-7  " />
                Fail
              </Button>
              <Button className={`py-8 w-8 bg-transparent flex flex-col -gap-3 -mt-1 ${darkMode ? "text-white ": "text-slate-300 "} text-sm`}	
              onClick={() => {}}
              >
                <Image src={Done} className="w-7   " />
                Done
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
          <h2 className="text-lg  bg-gradient-to-r from-danger to-primary bg-clip-text text-transparent font-semibold">
            {props.name || "Single line "}
          </h2>
        }
        secondary={
          <span className="text-slate-400 text-sm">
            {props.index || "Goal 1"}{" "}
          </span>
        }
      />
    </ListItem>
  );
}
