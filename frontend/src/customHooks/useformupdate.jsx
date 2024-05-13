import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "./Axios";
import React from "react";
import { image } from "@nextui-org/react";

export default function useformupdate() {
  const formik = useFormik({
    //i will add more when the backend is ready
    initialValues: {
      username:"",
      email: "",
      phonenumber: "",
      image: "",
      languages: "",
      organisation: "",
      password: "",
      education: "",
      dateofbirth:"",
    },
    validationSchema: Yup.object({
      username: Yup.string(),
      email: Yup.string(),
      phonenumber: Yup.string(),
      image: Yup.string(),
      language: Yup.string(),
      organisation: Yup.string(),
      education: Yup.string(),
    date:Yup.date()
    }),
    onSubmit: async (values) => {
      try {
        // Add your form submission logic here
        // For example, you can make an API call using axios
        const { username, email, phonenumber, image, languages, organisation,  education,dateofbirth } = values;
        const tempvalue ={username,email,image,phonenumber}
        console.log('tempvalue',tempvalue);
        const response = await axios.patch("/api/user", {phonenumber:phonenumber}, {
          withCredentials: true,
        });

        if (response.status === 200) {
          alert("User created successfully");
          console.log(response);
          //formik.resetForm();
        }
        localStorage.setItem(
          "auth",
          btoa(JSON.stringify({ user: values.username, credentials: response.data }))
        );
        formik.resetForm();
        // Handle the successful submission
      } catch (error) {
        // Handle the error
        console.log(error);
      }
    },
  });

  return formik;
}
