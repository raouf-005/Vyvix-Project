import React from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Switch } from "@nextui-org/react";
import EditInput from "../EditInput";
import useFormPassword from "../../customHooks/useformpassword";
import PassInput from "../PassInput";








const classNames={
    
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
  }






export default function Security() {

  const formik =useFormPassword()

  return (
    <div className="flex flex-col gap-4 pt-4 px-6">
      <div className="flex flex-col     ">
        <h3 className="text-lg font-semibold text-[#303867] mb-5 dark:text-white">
          Two-factor authentication
        </h3>
        <div className="flex gap-2">
          <Switch  />
          <p className="text-[#303867] font-medium dark:text-gray-400">
            Enable two-factor authentication
          </p>
        </div>
      </div>
     
      
          <div className="flex flex-col max-w-80 gap-2">
            <h3 className="text-lg font-semibold text-[#303867] dark:text-white">
              Change password
            </h3>
           
              <PassInput
              label={"Current password"}
                type="password"
                value="Enter old password"
                classNames={classNames}
                variant="bordered"
                id="OldPass"
                name="OldPass"
                 formik={formik}
              />
          
             
              <PassInput
                label={"New password"}
                type="password"
                value="Enter new password"
                classNames={classNames}
                id="NewPass"
                name="NewPass"
                formik={formik}
              />

              <PassInput
                label={"Confirm password"}
                type="password"
                value="Confirm new password"
                classNames={classNames}
                id="ConfirmPass"
                name="ConfirmPass"
                formik={formik}
              />
        </div>

        <div className=" flex justify-end  col-span-2">
            <Button 
              onClick={formik.handleSubmit}
            className="bg-gradient-to-r  sm:text-lg from-rose-500 to-purple-700 max-w-40 rounded-full text-white font-semibold px-20 py-6 ">
                Save
            </Button>
        </div>
    </div>
  );
}
