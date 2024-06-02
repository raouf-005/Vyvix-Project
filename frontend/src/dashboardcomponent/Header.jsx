import {
  BreadcrumbItem,
  Breadcrumbs,
  Input,
  Button,
  Tooltip,
} from "@nextui-org/react";
import DropdownProfile from "./DropdownProfile";
import { useContext } from "react";
import { PageContext } from "../pages/PagesContainer";
import {
  MoonIcon,
  NotificationIcon,
  SupportIcon,
  SearchIcon,
} from "../assets/HeaderIcons";

export default function Header() {
  const { currentPage, setCurrentPage, darkMode, setDarkMode } =
    useContext(PageContext);

  const toggleDarkMode = () => {
    setDarkMode((prevdark) => {
      const newDarkMode = !prevdark;
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      return newDarkMode;
    });
  };

  return (
    <header className="py-7 px-6">
      <div className="flex justify-between items-center">
        <div className="">
          <Breadcrumbs
            separator="/"
            aria-label="Breadcrumbs"
            itemClasses={{
              separator: "pr-1",
            }}
          >
            <BreadcrumbItem>Pages</BreadcrumbItem>
            <BreadcrumbItem>{currentPage}</BreadcrumbItem>
          </Breadcrumbs>
          <h1 className="text-black text-4xl font-bold max-w-md dark:text-white">
            {currentPage.toLowerCase() === "dashboard"
              ? "Main Dashboard"
              : currentPage}
          </h1>
        </div>
        <div className="min-w-[430px] rounded-full p-2 bg-white flex dark:bg-carddm gap-1 items-center">
          <Input
            size="sm"
            radius="full"
            aria-label="inputsearch "
            placeholder="Search..."
            classNames={{
              inputWrapper: ["bg-slate-100", "dark:bg-bgdm"],
              input: ["text-md"],
            }}
            className="max-w-[55%] mr-3"
            startContent={<SearchIcon alt="Search Icon" dark={darkMode} />}
            autoComplete="off"
          />

          <Tooltip
          className={`  text-[11px]  ${darkMode ?'bg-carddm text-white' :'text-black' }  `}
          content="Notifications" placement="bottom"
          offset={-3}
          >
            <Button
              isIconOnly
              className="rounded-full bg-transparent"
              aria-label="button"
            >
              <NotificationIcon alt="Notification Icon" dark={darkMode} />
            </Button>
          </Tooltip>
          <Tooltip
          className={`  text-[11px]  ${darkMode ?'bg-carddm text-white' :'text-black' }  `}
          content="Dark Mode" placement="bottom"
          offset={-3}
          >
          <Button
            isIconOnly
            className="rounded-full bg-transparent"
            onClick={() => toggleDarkMode()}
            aria-label="button"
          >
            <MoonIcon alt="Moon Icon" dark={darkMode} />
          </Button>
          </Tooltip>
          <Tooltip
          className={`  text-[11px]  ${darkMode ?'bg-carddm text-white' :'text-black' }  `}
          content="Support" placement="bottom"
          offset={-3}
          >
          <Button
            isIconOnly
            className="rounded-full bg-transparent"
            aria-label="button"
            onClick={
              () => {
                window.open("https://mail.google.com/mail/?view=cm&fs=1&to=a_derardja@gmail.com&su=Support%20and%20Report", "_blank");
            }
            }
          >
            <SupportIcon alt="Support Icon" dark={darkMode} />
          </Button>
          </Tooltip>
        
          <DropdownProfile />
        </div>
      </div>
    </header>
  );
}
