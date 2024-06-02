import React, { useState } from "react";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Avatar,
  User,
} from "@nextui-org/react";
import { useContext } from "react";
import { PageContext } from "../pages/PagesContainer";
import axios from "../customHooks/Axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

export default function DropdownProfile() {
  const Navigate = useNavigate();
  const { currentPage, setCurrentPage, darkMode, setDarkMode } =
    useContext(PageContext);

  const Logout = async () => {
    localStorage.removeItem("auth");
    try {
      const response = await axios.post(
        "/api/userlogout",
        {},
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        /*                alert("User Logged Out");
         */ toast.success("User Logged Out", {
          position: "top-center",
          autoClose: 100,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        Navigate("/login");
        setCurrentPage("Login");
      }
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <Dropdown
        radius="sm"
        aria-label="User options"
        classNames={{
          base: "before:bg-default-200 ", // change arrow background
          content: "p-0  ", // change dropdown content
        }}
      >
        <DropdownTrigger>
          <Avatar
            showFallback
            src={
              localStorage.getItem("auth")
                ? JSON.parse(atob(localStorage.getItem("auth"))).credentials
                    .image
                : ""
            }
            aria-label=" Profile Picture"
            className="w-12 h-12 ml-4 cursor-pointer"
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Custom item styles"
          // disabledKeys={["profile"]}
          //there was a problem in dark mode and dropdown so i did it manually
          className={
            !darkMode
              ? "p-3   "
              : "p-3  bg-carddm rounded-md shadow-sm  border-small border-bgdm"
          }
          itemClasses={{
            base: [
              "rounded-md",
              darkMode ? "text-white" : "text-default-500",
              "data-[selectable=true]:focus:bg-default-50",
              "data-[pressed=true]:opacity-70",
              "data-[focus-visible=true]:ring-default-500",
            ],
          }}
        >
          <DropdownSection aria-label="Profile & Actions" showDivider>
            <DropdownItem isReadOnly key="profile" className="h-14 gap-2">
              <User
                // i will add the actual user name and name
                //Temporary until i get the full name for the backend
                name={`${
                  JSON.parse(atob(localStorage.getItem("auth"))).credentials
                    .username
                }`}
                description={`@${
                  JSON.parse(atob(localStorage.getItem("auth"))).credentials
                    .username
                }`}
                classNames={{
                  name: "text-default-600",
                  description: "text-default-500",
                }}
                avatarProps={{
                  size: "md",
                  src: localStorage.getItem("auth")
                    ? JSON.parse(atob(localStorage.getItem("auth"))).credentials
                        .image
                    : "",
                }}
              />
            </DropdownItem>

            <DropdownItem
              key="settings"
              onClick={() => {
                setCurrentPage("Settings");
                useNavigate("/settings");
              }}
            >
              Settings
            </DropdownItem>
          </DropdownSection>

          <DropdownSection aria-label="Help & Feedback">
            <DropdownItem key="help_and_feedback"
              onClick={
                () => {
                  window.open("https://mail.google.com/mail/?view=cm&fs=1&to=a_derardja@gmail.com&su=Support%20and%20Report", "_blank");
              }
              }
            >
                  Help & Feedback
            </DropdownItem>
            <DropdownItem
              key="logout"
              className="text-danger"
              color="danger"
              onClick={() => {
                Logout();
              }}
            >
              Log Out
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
