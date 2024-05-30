import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "./Axios";
import React from "react";
import { image } from "@nextui-org/react";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

export default function useformupdate() {
  const arraysEqual = (arr1, arr2) => {
    if (arr1?.length !== arr2?.length) {
      return false; // Different lengths means arrays are not equal
    }
    return arr1.every((value, index) => value === arr2[index]);
  };
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
      email: Yup.string().email("Invalid email address"),
      phonenumber:Yup.number().typeError("Phone number must be a number"),
      image: Yup.string(),
      organization: Yup.string(),
      education: Yup.string(),
      dateofbirth: Yup.date(), // Set the validation type as date
      speciality:Yup.string(),
      fullname:Yup.string(),
      bio:Yup.string()
      .max(500, "Description must be 500 characters or less"),
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
        if (!updatedValues.languages||updatedValues.languages?.length===0) delete updatedValues.languages;// if it caused a problem i will change it
        if (!updatedValues.speciality) delete updatedValues.speciality;
        if (!updatedValues.fullname) delete updatedValues.fullname;

        if (arraysEqual(updatedValues.languages,JSON.parse(atob(localStorage.getItem('auth'))).credentials.languages)) delete updatedValues.languages;
    
        if (Object.keys(updatedValues).length > 0) { 
        const response = await axios.patch(
          "/api/user",
          updatedValues ,
          {
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          toast.success('Information updated successfully  ', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "light",
            transition: Bounce,
          });
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
        toast.error('You have to update at least one field  ', {
          position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
        transition: Bounce,
          });
        
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
