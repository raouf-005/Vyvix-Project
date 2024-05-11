import { Avatar, Button, Image } from "@nextui-org/react";
import React, { useEffect } from "react";
import EditInput from "../EditInput";
import { useState } from "react";
import UploadPhoto from "../UploadPhoto";
import { useDisclosure } from "@nextui-org/react";
import EditImg from "../../assets/EditProfileImg.svg";
import useformupdate from "../../customHooks/useformupdate";

const data = {
  pfp: "https://i.pravatar.cc/150?u=a04258114e29026302d",
  name: "Abderraouf Derardja",
};

export default function EditProfile() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const formik = useformupdate();
  useEffect(() => {
    formik.setValues({
      username: "Raoufard",
      email: " ",
      phonenumber: " ",
      image: " ",
      languages: " ",
      organisation: " ",
      password: " ",
    })},[]);
  
  return (
    <form className="flex flex-row  mt-8 relative  bg-transparent" onSubmit={formik.handleSubmit}>
      <div className="min-w-64 relative  flex justify-center">
        <Avatar
          className="w-36 h-36 mt-2  cursor-pointer "
          src={localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")).profileImg : ""}
          onClick={onOpen}
        />
        <img
          src={EditImg}
          className="absolute w-9 h-9 top-[97px]  right-[50px] cursor-pointer rounded-full"
          onClick={onOpen}
        />
      </div>
      <div className="grid grid-cols-2   gap-y-6 gap-x-8 flex-1 mr-4">
        <EditInput label="Full Name" value="Abderraouf Derardja" />
        <EditInput label="Username" value="Raoufard"
         formik={formik}
         />
        <EditInput label="Email" value="Test@gmail.com" type="email" 
        formik={formik}
         />
        <EditInput
          label="Password"
          value="Abderraouf Derardja"
          type="password"
          //formik={formik}
        />
        <EditInput label="DateofBirth" value="27/04/2004" type="date" />
        <EditInput
          label="Education"
          value="Higher School of Computer Science & Technology"
          formik={formik}
        />
        <EditInput
          label="Speciality"
          value="Artificial Intelligence , Computer Vision "
   
        />
        <EditInput
          label="Languages"
          value="Abderraouf Derardja"
          type="option"
         // formik={formik}
        />
        <EditInput label="Work History" value="Abderraouf Derardja" />
        <EditInput label="Organisation" value="Abderraouf Derardja"
        formik={formik}
        />
        <div className=" flex justify-end  col-span-2">
          <Button type="submit" 
          className="bg-gradient-to-r  mt-3 text-lg from-rose-500 to-purple-700 max-w-40 rounded-full text-white font-semibold px-20 py-6 ">
            Save
          </Button>
        </div>
      </div>
      <UploadPhoto isOpen={isOpen} onOpenChange={onOpenChange} data={data}  />
    </form>
  );
}
