import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "./Axios";
import React from "react";
import { image } from "@nextui-org/react";

export default function useformupdate() {
  const formik = useFormik({
    //i will add more when the backend is ready
    initialValues: {
      username: "",
      email: "",
      phonenumber: "",
      image: "",
      languages: [],
      organisation: "",
      password: "",
      education: "",
      dateofbirth: "", // Set the initial value as a date object
      speciality:"",
      fullname:''
    },
    validationSchema: Yup.object({
      username: Yup.string(),
      email: Yup.string(),
      phonenumber:Yup.number(),
      image: Yup.string(),
      organisation: Yup.string(),
      education: Yup.string(),
      dateofbirth: Yup.date(), // Set the validation type as date
      speciality:Yup.string(),
    }),
    onSubmit: async (values) => {
      try {
        // Add your form submission logic here
        // For example, you can make an API call using axios
        // Exclude the 'phonenumber' field if it is empty
        const updatedValues = { ...values };
        if (!updatedValues.phonenumber) delete updatedValues.phonenumber;
        if (!updatedValues.image) delete updatedValues.image;
        if (!updatedValues.organisation) delete updatedValues.organisation;
        if (!updatedValues.education) delete updatedValues.education;
        if (!updatedValues.dateofbirth) delete updatedValues.dateofbirth;
        if (!updatedValues.username) delete updatedValues.username;
        if (!updatedValues.email) delete updatedValues.email;
        if (!updatedValues.password) delete updatedValues.password;
        if (!updatedValues.languages) delete updatedValues.languages;// if it caused a problem i will change it
        if (!updatedValues.speciality) delete updatedValues.speciality;
        if (!updatedValues.fullname) delete updatedValues.fullname;
        
        const response = await axios.patch(
          "/api/user",
          updatedValues ,
          {
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          alert("User created successfully");
          console.log(response.data);
        }

        localStorage.setItem(
          "auth",
          btoa(
            JSON.stringify({
              credentials: response.data,
            })
          )
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
