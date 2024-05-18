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
      organization: "",
      password: "",
      education: "",
      dateofbirth: "", // Set the initial value as a date object
      speciality:"",
      fullname:"",
      bio:""
    },
    validationSchema: Yup.object({
      username: Yup.string(),
      email: Yup.string(),
      phonenumber:Yup.number(),
      image: Yup.string(),
      organization: Yup.string(),
      education: Yup.string(),
      dateofbirth: Yup.date(), // Set the validation type as date
      speciality:Yup.string(),
      fullname:Yup.string(),
      bio:Yup.string()
    }),
    onSubmit: async (values) => {
      try {
        // Add your form submission logic here
        // For example, you can make an API call using axios
        // Exclude the 'phonenumber' field if it is empty
        const updatedValues = { ...values };
        if (!updatedValues.phonenumber) delete updatedValues.phonenumber;
        if (!updatedValues.bio) delete updatedValues.bio;
        if (!updatedValues.image) delete updatedValues.image;
        if (!updatedValues.organization) delete updatedValues.organization;
        if (!updatedValues.education) delete updatedValues.education;
        if (!updatedValues.dateofbirth) delete updatedValues.dateofbirth;
        if (!updatedValues.username) delete updatedValues.username;
        if (!updatedValues.email) delete updatedValues.email;
        if (!updatedValues.password) delete updatedValues.password;
        if (!updatedValues.languages||updatedValues.languages.length===0) delete updatedValues.languages;// if it caused a problem i will change it
        if (!updatedValues.speciality) delete updatedValues.speciality;
        if (!updatedValues.fullname) delete updatedValues.fullname;
        if (updatedValues.languages===JSON.parse(atob(localStorage.getItem('auth'))).credentials.languages) delete updatedValues.languages;
       
        if (Object.keys(updatedValues).length > 0) { 
        const response = await axios.patch(
          "/api/user",
          updatedValues ,
          {
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          alert("Information updated successfully");
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
      }else{
        alert("you have to update at least one field")
      }
        // Handle the successful submission
      } catch (error) {
        // Handle the error
        console.log(error);
      }
    },

  });

  return formik;
}
