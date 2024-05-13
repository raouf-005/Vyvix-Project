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
 const user = JSON.parse(atob(localStorage.getItem("auth")));
 console.log("user",user)
  return (
    <form
      className="flex flex-row  mt-8 relative  bg-transparent"
      onSubmit={formik.handleSubmit}
    >
      <div className="min-w-64 relative  flex justify-center">
        <Avatar
          showFallback
          className="w-36 h-36 mt-2  cursor-pointer "
          src={user.credentials.image || ""}
          onClick={onOpen}
        />
        <img
          src={EditImg}
          className="absolute w-9 h-9 top-[97px]  right-[50px] cursor-pointer rounded-full"
          onClick={onOpen}
        />
      </div>
      <div className="grid grid-cols-2   gap-y-6 gap-x-8 flex-1 mr-4">
        <EditInput
          label="Full Name"
          value="Abderraouf Derardja"
          id="fullName"
          name="fullName"
        />
        <EditInput
          label="Username"
          value={user.credentials.username}
          formik={formik}
          id="username"
          name="username"
        />
        <EditInput
          label="Email"
          value={user.credentials.email}
          type="email"
          formik={formik}
          id="email"
          name="email"
        />
        {/*      <EditInput
          label="Password"
          value="Abderraouf Derardja"
          type="password"
          //formik={formik}
        /> */}
        <EditInput
          label="DateofBirth"
          value={""}
          type="date"
          formik={formik}
          id="dateOfBirth"
          name="dateOfBirth"
        />
        <EditInput
          label="Education"
          value="Higher School of Computer Science & Technology"
          formik={formik}
          id="education"
          name="education"
        />
        <EditInput
          label="Speciality"
          value="Artificial Intelligence , Computer Vision "
          id="speciality"
          name="speciality"
        />
        <EditInput
          label="Languages"
          value={user.credentials.Languages}
          type="option"
          formik={formik}
          id="languages"
          name="languages"
        />
        <EditInput
          label="Work History"
          value="Entrepreunuer"
          id="workHistory"
          name="workHistory"
        />

        <EditInput
          label="Organisation"
          value="Estin"
          //formik={formik}
          id="organisation"
          name="organisation"
        />
        <EditInput
          label="Phone Number"
          value={user.credentials.phonenumber}
          formik={formik}
          id="phoneNumber"
          name="phoneNumber"
        />

        <div className=" flex justify-end  col-span-2">
          <Button
            type="submit"
            className="bg-gradient-to-r  mt-3 text-lg from-rose-500 to-purple-700 max-w-40 rounded-full text-white font-semibold px-20 py-6 "
          >
            Save
          </Button>
        </div>
      </div>
      <UploadPhoto
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        data={data}
        formik={formik}
      />
    </form>
  );
}
