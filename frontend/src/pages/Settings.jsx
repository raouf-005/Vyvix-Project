import React, { useEffect } from "react";
import HeadBar from "../settingscomponent/HeadBar";
import EditProfile from "../settingscomponent/OptionComponent/EditProfile";
import Preferences from "../settingscomponent/OptionComponent/Preferences";
import Security from "../settingscomponent/OptionComponent/Security";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Settings() {
  const [currentOption, setCurrentOption] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id === "0") {
      navigate("/settings/0");
    } else if (id === "1") {
      navigate("/settings/1");
    } else if (id === "2") {
      navigate("/settings/2");
    } else {
      navigate("/settings/0");
    }
  }, []);

  return (
    <div className=" rounded-xl  flex flex-col gap-3 bg-white px-8 p-6 mx-8 dark:bg-carddm mb-10">
      <HeadBar />
      {id === "0" && <EditProfile />}
      {id === "1" && <Preferences />}
      {id === "2" && <Security />}
    </div>
  );
}
