import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,DropdownSection, Avatar,User } from "@nextui-org/react";
import { useContext } from "react";
import { PageContext } from "../pages/PagesContainer";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function DropdownProfile() {
  const Navigate =useNavigate(  )
    const {currentPage,setCurrentPage,darkMode,setDarkMode} = useContext(PageContext);
    const Logout = async () => {
        localStorage.removeItem("auth");
       
      
        try {
            const response = await axios.post("http://localhost:3000/api/userlogout",{},
                {
                    withCredentials: true,
                }
            );
            if (response.status === 200) {
               alert("User Logged Out");
                Navigate("/login")
                setCurrentPage("Login")
            }
        
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };
    

    return (
        <Dropdown
        radius="sm"
        classNames={{
          base: "before:bg-default-200 ", // change arrow background
          content: "p-0  ", // change dropdown content
        }}
    
      >
        <DropdownTrigger>
        <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            className="w-12 h-12 ml-4"/>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Custom item styles"
         // disabledKeys={["profile"]}
          //there was a problem in dark mode and dropdown so i did it manually 
          className={!darkMode ?"p-3   ":"p-3  bg-carddm rounded-md shadow-sm  border-small border-bgdm"}
        itemClasses={{
                base: [
                    "rounded-md",
                    darkMode ? "text-white" : "text-default-500",
                    "data-[selectable=true]:focus:bg-default-50",
                    "data-[pressed=true]:opacity-70",
                    "data-[focus-visible=true]:ring-default-500",
                    
                ]
            }}
          
        >
          <DropdownSection aria-label="Profile & Actions" showDivider>
            <DropdownItem
              isReadOnly
              key="profile"
              className="h-14 gap-2"
           
            >
              <User
              // i will add the actual user name and name
              //Temporary until i get the full name for the backend 
                name={`${JSON.parse(localStorage.getItem("auth")).user}`}
                description={`@${JSON.parse(localStorage.getItem("auth")).user}`}
                classNames={{
                  name: "text-default-600",
                  description: "text-default-500",
                }}
                avatarProps={{
                  size: "md",
                  src: "https://i.pravatar.cc/150?u=a04258114e29026302d",
                }}
              />
            </DropdownItem>
         
            <DropdownItem key="settings">Settings</DropdownItem>
          
          </DropdownSection>  
  
          <DropdownSection aria-label="Help & Feedback">
            <DropdownItem key="help_and_feedback">
              Help & Feedback
            </DropdownItem>
            <DropdownItem key="logout"
                className="text-danger" color="danger"
                onClick={() => {Logout()}}
            >Log Out</DropdownItem>
          </DropdownSection> 
        </DropdownMenu>
      </Dropdown>
    )
}