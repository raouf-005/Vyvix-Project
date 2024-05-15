import React, { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "../assets/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../assets/EyeSlashFilledIcon";
import { Button } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

const classNames = {
  input: [
    "bg-transparent",
    "text-black/90 dark:text-white/90",
    "placeholder:text-slate-400 dark:placeholder:text-white/60",
  ],
  innerWrapper: "bg-transparent",
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
};

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

export default function EditInput({
  label,
  value,
  type = "text",
  formik,
  id,
  name,
}) {
  const formikfield = formik ? formik.getFieldProps(label.toLowerCase().replace(/\s/g, '')) : null;

useEffect(() => {
    if (formikfield&&value && label !== "Languages") {
        formikfield.value=value;
    }
    }, [value]);


const [isVisible, setIsVisible] = useState(true);
const [values, setValues] = React.useState(new Set([]));

const handleSelectionChange = (e) => {
    console.log(values)
  setValues(new Set(e.target.value.split(",")));
  formikfield.value = Array.from(values);
  
};
// iw ill modify this to be more dynamic the above function to get rid of the useEffect






  const renderInput = () => {
    switch (type) {
      case "password":
        return (
          <div className="relative">
            <Input
            aria-label="Password"
              placeholder={value}
              id={id || label}
              classNames={classNames}
              name={name || label}
              variant="bordered"
              type={isVisible ? "password" : "text"}
              {...formikfield}
            />
            <Button
              isIconOnly
              aria-label="Toggle password visibility"
              onClick={() => {
                setIsVisible(!isVisible);
              }}
              className="absolute right-4 top-[7.7px] bg-transparent"
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </Button>
          </div>
        );
      case "date":
        return (
          <Input
            placeholder={value}
            id={id || label}
            name={name || label}
            type="date"
            classNames={classNames}
            className="max-w-[300px]"
            variant="bordered"
            aria-label="Date of birth"
            {...formikfield}
           
          />
        );
      case "option":
        return (
          <Select
            id={id || label}
            name={name || label}
            aria-label="Select languages"
            classNames={classNames}
            variant="bordered"
            selectionMode="multiple"
            placeholder="Select languages"
            selectedKeys={values}
            className="max-w-[350px] bg-transparent   dark:bg-indigo-100/5 rounded-xl"
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
            onChange={handleSelectionChange}        
         
          >
            {languages.map((language) => (
              <SelectItem key={language.value} value={language.value}>
                {language.label}
              </SelectItem>
            ))}
          </Select>
        );
      default:
       
        return (
          <Input
            placeholder={value}
            id={id}
            name={name}
            type={type}
            variant="bordered"
            className="bg-transparent "
            classNames={classNames}
            {...formikfield}
            aria-label="Genral Input"
            
          />
        );
    }
  };

  return (
    <div className="relative flex flex-col gap-2">
      <label htmlFor={label} className=" dark:text-white text-black">
        {label}
      </label>
      {renderInput()}
    </div>
  );
}
