import React, { useEffect, useState } from "react";
import axioss from "../customHooks/Axios";
import axios from "axios";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Link,
} from "@nextui-org/react";

import { FileUploader } from "react-drag-drop-files";
import { Avatar } from "@nextui-org/react";
import { useRef } from "react";
import useformupdate from "../customHooks/useformupdate";
//add refrech for the profile

const UploadPhoto = ({ data, isOpen, onOpenChange }) => {

  const formik = useformupdate();

  const formikfield = formik ? formik.getFieldProps("image") : null;
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" ? true : false
  );
  const [image, setImage] = useState(null); // image url , will be a normal string
  const [display, setDisplay] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [issubmited,setisSubmited]=useState(false);

  
  
  useEffect(() => {
    setDarkMode(localStorage.getItem("darkMode") === "true" ? true : false);
  }, [localStorage.getItem("darkMode")]);

  const handleImageChange = (selectedImage) => {
    setImage(selectedImage);
    setDisplay(URL.createObjectURL(selectedImage));
  };
// i will do it in useEffect later



  const handleImageUpload = async () => {
    console.log("uploading...");
    const file = image; //will get removed
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "bc6pw1tu");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dwxvvtrn4/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      
      console.log("Uploaded");
      setImageUrl(response.data.secure_url);
      setDisplay(response.data.secure_url);
      window.location.reload();
      const auth = atob(localStorage.getItem("auth"));
      localStorage.setItem("auth",btoa(JSON.stringify({ ...JSON.parse(auth), credentials: { ...JSON.parse(auth).credentials, image: response.data.secure_url}}))); 
      setisSubmited(true);
      return response.data.secure_url;
    } catch (error) {
      console.error("Upload Error:", error);
    }
    
  
    
    
  };


  useEffect(() => {
    if (formikfield) {
       // formikfield.value=localStorage.getItem("auth") ? JSON.parse(localStorage.getItem("auth")).credentials.image : "";
       
    }
    const handleUpload = async () => {
      if (formikfield)  {    
        try {
          const res = await axioss.patch("/api/user", { image: imageUrl }, {
            withCredentials: true,
          });
          console.log("Image updated successfully");
          console.log(res); 
        } catch (error) {
          console.error("Image update error:", error);
        }
      }
    }
    if (issubmited) {
      handleUpload();
      setisSubmited(false);
      setDisplay(localStorage.getItem("auth") ?JSON.parse(atob(localStorage.getItem("auth"))).credentials.image : "");
      setImageUrl(localStorage.getItem("auth") ?JSON.parse(atob(localStorage.getItem("auth"))).credentials.image : "")
    }
    }, [issubmited]);



  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{
        body: "py-6 flex flex-col jsutify-center items-center gap-4",
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        base: `border-[#292f46] ${
          darkMode ? "bg-[#19172c]" : ""
        } text-[#a8b0d3]`,
        header: `border-b-[1px] text-xl ${
          darkMode ? "" : "text-black"
        } border-[#292f46]`,
        footer: "flex justify-center gap-4 pt-0",
        closeButton: "hidden",
      }}
      placement="top-center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Upload Profile Picture</ModalHeader>
            <ModalBody className="flex flex-col justify-center">
              <FileUploader
                handleChange={handleImageChange}
                name="Picture"
                types={["JPG", "PNG", "JPEG"]}
                maxSize={1}
                multiple={false}
              />
                <Avatar
                  src={display || data.pfp}
                  alt="pfp"
                  className="w-28 h-28"
                  aria-label="Profile Picture"
                />
       
            </ModalBody>
            <ModalFooter>
              <Button color="danger" size="lg" variant="flat" onPress={onClose}
              >
                Close
              </Button>
              <Button color="primary" size="lg" onPress={onClose}
              onClick={()=>handleImageUpload()}
              >
                Submit
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default UploadPhoto;
