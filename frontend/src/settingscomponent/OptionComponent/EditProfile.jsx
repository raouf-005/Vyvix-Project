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
  /*   useEffect(() => {
    formik.setValues({
      fullName: user.credentials.fullName,
      username: user.credentials.username,
      email: user.credentials.email,
      dateOfBirth: user.credentials.dateOfBirth,
      education: user.credentials.education,
      speciality: user.credentials.speciality,
      languages: user.credentials.languages,
      workHistory: user.credentials.workHistory,
      organisation: user.credentials.organisation,
      phoneNumber: user.credentials.phoneNumber,
    });
  }, []); */
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
      <div className="grid grid-cols-2   gap-y-4 gap-x-8 flex-1 mr-4">
        <EditInput
          label="Full Name"
          value={user.credentials.fullname || "Enter your Full name "}
          id="fullName"
          name="fullName"
          formik={formik}
        />
        <EditInput
          label="Username"
          value={user.credentials.username || "Enter a username"}
          formik={formik}
          id="username"
          name="username"
        />
        <EditInput
          label="Email"
          value={user.credentials.email || "Enter an email"}
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
          label="Date of Birth"
          value={user.credentials.dateofbirth || ""}
          type="date"
          formik={formik}
          id="dateOfBirth"
          name="dateOfBirth"
        />
        <EditInput
          label="Education"
          value={user.credentials.education || " Enter your education"}
          formik={formik}
          id="education"
          name="education"
        />
        <EditInput
          label="Speciality"
          value={user.credentials.speciality || "Enter your speciality"}
          id="speciality"
          name="speciality"
          formik={formik}
        />
        <EditInput
          label="Languages"
          value={user.credentials.languages || "Select your languages"}
          type="option"
          formik={formik}
          id="languages"
          name="languages"
        />
        <EditInput
          label="Work History"
          value={user.credentials.workhistory || "Entre your work history"}
          id="workHistory"
          type="text"
          formik={formik}
          name="workHistory"
        />

        <EditInput
          label="Organization"
          value={user.credentials.organization || "Enter your organisation"}
          formik={formik}
          id="organisation"
          name="organisation"
        />
        <EditInput
          label="Phone Number"
          value={user.credentials.phonenumber || "Entre your number"}
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
