import React from "react";
import HeadBar from "../settingscomponent/HeadBar";
import EditProfile from "../settingscomponent/OptionComponent/EditProfile";
import Preferences from "../settingscomponent/OptionComponent/Preferences";
import Security from "../settingscomponent/OptionComponent/Security";
import { useState } from "react";

export default function Settings() {
  const [currentOption, setCurrentOption] = useState("Profile");
  return (
    <div className=" rounded-xl  flex flex-col gap-3 bg-white px-8 p-6 mx-8 dark:bg-carddm">
      <HeadBar
        currentOption={currentOption}
        setCurrentOption={setCurrentOption}
      />
      {currentOption === "Profile" && <EditProfile />}
      {currentOption === "Preferences" && <Preferences />}
      {currentOption === "Security" && <Security />}

    </div>
  );
}
