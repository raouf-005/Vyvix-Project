import React, { useContext, useEffect ,useState} from "react";

import PreferencesCard from "../PrefrencesCard";
import { Select, SelectItem, Switch, Textarea } from "@nextui-org/react";
import { SunIcon } from "../../assets/SunIcon";
import { MoonIcon } from "../../assets/MoonIcon";
import { PageContext } from "../../pages/PagesContainer";

const classNames={
    
  input: [
    "bg-transparent",
    "text-black/90 dark:text-white/90",
    "placeholder:text-slate-400 dark:placeholder:text-white/60",
  ],
  innerWrapper: "bg-transparent",
  label: [
    "text-black dark:text-white  text-lg font-medium",
    "dark:text-white",
  ],
  inputWrapper: [
    "dark:bg-default/60",
    "backdrop-blur-xl",
    "backdrop-saturate-200",
    "hover:bg-slate-100/70 dark:hover:bg-default/70",
    "dark:hover:bg-default/70",
    "group-data-[focused=true]:bg-default-200/50",
    "dark:group-data-[focused=true]:bg-default/60",
    "!cursor-text",
  ],
}


const languages = [
    { label: "French", value: "French" },
    { label: "English", value: "English" },
    { label: "Arabic", value: "Arabic" },
    { label: "Kabyle", value: "Kabyle" },
    { label: "Espanish", value: "Espanish" },
    { label: "Italien", value: "Italien" },
    { label: "German", value: "German" },
    { label: "Spanish", value: "Spanish" },
    { label: "Chinese", value: "Chinese" },
    ];

export default function Preferences() {

    const { darkMode, setDarkMode } = useContext(PageContext);
  
  const [value, setValue] = React.useState(new Set([]));


  const toggleDarkMode = () => {
    setDarkMode((prevdark) => {
      const newDarkMode = !prevdark;
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      return newDarkMode;
    });
  };
  const handleSelectionChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-12 mx-4 max-w-[1400px]  ">
        <Textarea aria-label="bio" label="Edit bio" placeholder="Update your Bio" variant="bordered" classNames={classNames} labelPlacement="outside" className="max-w-xs " />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-black dark:text-white">
            Language
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Select your preferred language
          </p>
          <Select
            variant="bordered"
            selectedKeys={value}
            size="sm"
            aria-label="Select Language"
            className="max-w-xs bg-transparent   dark:bg-indigo-300/25 rounded-xl "
            placeholder="English"
            onChange={handleSelectionChange}
            listboxProps={{
              itemClasses: {
                  // if i have time i will add dark mode 
                base: [
                  "rounded-md",
                  "text-slate-600",
                  "dark:text-white",
                  "transition-opacity",
                  "data-[hover=true]:text-foreground",
                  "data-[hover=true]:bg-default-100",
                  "dark:data-[hover=true]:bg-default-50",
                  "data-[selectable=true]:focus:bg-default-50",
                  "data-[pressed=true]:opacity-70",
                  "data-[focus-visible=true]:ring-default-500",
                ],
              },
            }}
     

          >
         
           {languages.map((item, index) => {
            return (
              <SelectItem key={index} value={item.value} sle>
                {item.label}
              
              </SelectItem>
            );
           }
           )}
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-black dark:text-white">
            Theme
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Select your preferred theme
          </p>
          <Switch
            aria-label="Dark Mode Switch"
            defaultSelected
            size="lg"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
            isSelected={darkMode}
            onValueChange={() => toggleDarkMode()}
          >
            {darkMode ? "Dark Mode" : "Light Mode"}
          </Switch>
        </div>
        <PreferencesCard />
      </div>
    </div>
  );
}
