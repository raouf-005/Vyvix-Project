import NavBtn from "./NavBtn";
import { Image, ButtonGroup, Button } from "@nextui-org/react";
import { useContext, useEffect } from "react";
import { PageContext } from "../pages/PagesContainer";
import { useNavigate } from "react-router-dom";
import {
  HomeImg,
  ProfileImg,
  RankingImg,
  VyvixLogo,
  SettingsImg,
  HeartSideIcon,
} from "../assets/SideBarIcons";
import LogoutImg from "../assets/Logout.svg";
import axios from "../customHooks/Axios";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
//i will move it to different directory

export default function SideBar({ darkMode }) {
  const { currentPage, setCurrentPage } = useContext(PageContext);
  const navigate = useNavigate();
  const company = localStorage.getItem("auth")
    ? JSON.parse(atob(localStorage.getItem("auth"))).credentials.company
    : false;

  const handleClicked = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    if (currentPage !== "UsersProfile") {
      navigate(`/${currentPage.toLowerCase()}`);
    }
  
  }, [currentPage]);

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
/*         alert("User Logged Out");
  */         toast.success('User Logged Out', {
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
         navigate("/login");
        setCurrentPage("Login");
      }
    } catch (error) {
      console.error("Logout failed:", error);

      toast.error('Logout failed', {
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
    <nav className="min-w-60 bg-white relative min-h-screen dark:bg-carddm ">
      <div className="flex justify-center flex-col items-center pb-2 pt-7  ">
        <VyvixLogo darkMode={darkMode} />
        <hr  className=" h-px  bg-gray-200 border-0 dark:bg-gray-700 w-full my-3 "/>
       
        <div className="flex rounded-full bg-gradient-to-br  from-danger to-primary p-[0.8px] ">
            <div className=" dark:bg-carddm bg-white rounded-full">
            <Button  radius="full" size="lg" className="   border-none bg-gradient-to-r  from-danger to-primary bg-clip-text text-transparent   ">
          Welcome{" "}
          {localStorage.getItem("auth")
            ? JSON.parse(atob(localStorage.getItem("auth"))).credentials
                .username
            : "User"}
        </Button>
            </div>

        </div>
      </div>

        

      <ButtonGroup className="flex flex-col items-start pl-5 gap-6 pt-1">
        {company === false ? (
          <NavBtn
            name="Dashboard"
            Icon={HomeImg}
            currentPage={currentPage}
            onClick={() => handleClicked("Dashboard")}
          />
        ) : (
          <NavBtn
            name="Favorites"
            Icon={HeartSideIcon}
            currentPage={currentPage}
            onClick={() => handleClicked("Favorites")}
          />
        )}
        <NavBtn
          name="Ranking"
          Icon={RankingImg}
          currentPage={currentPage}
          onClick={() => handleClicked("Ranking")}
        />
        <NavBtn
          name="Profile"
          Icon={ProfileImg}
          currentPage={currentPage}
          onClick={() => handleClicked("Profile")}
        />

        <NavBtn
          name="Settings"
          Icon={SettingsImg}
          currentPage={currentPage}
          onClick={() => handleClicked("Settings")}
        />
         <Button
        size="lg"
        className=" bg-gradient-to-br from-indigo-500 to-blue-500 dark:from-rose-500 dark:to-red-500/70   ml-6   mt-36   rounded-2xl  border-none text-white shadow-md "
        onClick={() => {
          Logout();
        }}
      >
        <Image src={LogoutImg} alt="Heart Icon" />
        Log Out
      </Button>
      </ButtonGroup>

     
    </nav>
  );
}
