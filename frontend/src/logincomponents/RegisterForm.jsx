import React, { useContext, useEffect, useState } from "react";
import { Checkbox, Button } from "@nextui-org/react";
import InputLogin from "./InputLogin";
import useFormRegister from "../customHooks/useformRegister.jsx";
import useAuth from "../authcomponent/useAuth";




export default function RegisterForm() {
/*   const [isLoading, setIsLoading] = useState(false);
 */  
  const {isLoading, setIsLoading} = useAuth();
  const formik = useFormRegister();
  const [EmailPassValue, setEmailPassValue] = useState(
    localStorage.getItem("email")
  );


  const handleClick = () => {
    setIsLoading(true);
    formik.handleSubmit();
   /*  setTimeout(() => {
      setIsLoading(false);
    }, 3000); */
  }





  useEffect(() => {
    if (EmailPassValue) {
      formik.setFieldValue("email", EmailPassValue);
      localStorage.removeItem("email");
    }
  }, [EmailPassValue]);

  return (
    <form
      className="flex flex-col gap-2 align-middle "
      onSubmit={formik.handleSubmit}
    >
      <InputLogin
        type="text"
        placeholder="Enter your Username"
        name="Username"
        formik={formik}
        aria-label=""
      />
      <InputLogin
        placeholder="Email"
        name="Email"
        type="email"
        formik={formik}
        aria-label=""
      />
      <InputLogin
        placeholder="Enter your Password"
        name="Password"
        type="password"
        formik={formik}
        aria-label=""
      />
      <div className="flex justify-between mt-1 ml-2">
        <Checkbox
          size="md"
          radius="sm"
          className=""
          aria-label=""
          {...formik.getFieldProps("company")}
        >
          Company
        </Checkbox>
      </div>

      <div className="flex justify-end mt-1 mr-5">
        <Button
          className="bg-blue-800 text-white px-11 -mt-2"
          size="lg"
          radius="lg"
          type="submit"
          isDisabled={
            !formik.values.email ||
            !formik.values.username ||
            !formik.values.password
          }
          isLoading={isLoading}

          onClick={
            () => {
              handleClick();
            }
          }
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
}
