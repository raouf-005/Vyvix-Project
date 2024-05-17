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
  { label: "french", value: "French" },
  { label: "English", value: "English" },
  { label: "Arabic", value: "Arabic" },
  { label: "Kabyle", value: "Kabyle" },
  { label: "Italien", value: "Italien" },
  { label: "German", value: "German" },
  { label: "Spanish", value: "Spanish" },
  { label: "Chinese", value: "Chinese" },
];

export default function PassInput({
  label,
  value,
  type = "text",
  formik,
  id,
  name,
}) {
  const formikfield = formik
    ? formik.getFieldProps(label.toLowerCase().replace(/\s/g, ""))
    : null;

  useEffect(() => {
    if (formikfield && value) {
      formikfield.value = value;
    }
  }, [value]);

  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="relative flex flex-col gap-2">
      <label htmlFor={label} className=" dark:text-white text-black">
        {label}
      </label>
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

      {formik.touched[formikfield.name.toLowerCase()] &&
      formik.errors[formikfield.name.toLowerCase()] ? (
        <p className="text-red-500 text-xs mt-1 w-[450px] ">
          {formik.errors[formikfield.name.toLowerCase()]}
        </p>
      ) : null}
    </div>
  );
}
