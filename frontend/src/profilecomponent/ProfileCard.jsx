import { Avatar, Image, Button } from "@nextui-org/react";
import { HeartIcon } from "../assets/HeartIcon";
import { useEffect, useState } from "react";
import axios from "../customHooks/Axios";



const Counter = (props) => {
  return (
    <div>
      <p className="text-black font-bold text-2xl dark:text-white">
        {props.value}
      </p>
      <p className="text-slate-400 text-md">{props.label}</p>
    </div>
  );
};

export default function ProfileCard(props) {
  const user = props.user || ""; //maybe i willadd some logic ot render only the user
  console.log(user);
  const counter = [
    {
      value:
        user.goals ||
        JSON.parse(atob(localStorage.getItem("auth"))).credentials.plans
          .length ||
        0,
      label: "Goals",
    }, //change it to goals
    {
      value:
        user.points ||
        JSON.parse(atob(localStorage.getItem("auth"))).credentials.points ||
        0,
      label: "Points",
    },
    {
      value:
        user.rank ||
        JSON.parse(atob(localStorage.getItem("auth"))).credentials.rank ||
        0,
      label: "Rank",
    },
  ];
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchSetFav = async (isFav) => {
      try {
        const response = await axios.patch(
          `/api/user/${isFav}fav/${user._id}`,{},
          {
            withCredentials: true,
          }
        );
      } catch (error) {
        console.log(error);
      }
    };
    if (user?.username) {
      if (liked) {
        fetchSetFav("");
      } else {
        fetchSetFav("un");
      }
    }
  }, [liked]);

  return (
    <div className=" flex lg:justify-center md:px-4  md:justify-start ">
      <div className="flex gap-5 flex-col items-center text-center min-h-[340px]  relative  bg-white dark:bg-carddm px-5 pt-4 pb-5 rounded-3xl">
        <div className="flex  flex-col items-center">
          <Image
            src={"data:image/jpeg;base64,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"}
            className="  md:max-h-[133px] sm:max-h-[90px]  z-0 lg:min-w-[968px] sm:min-w-[400px]"
            aria-label=""
          />
          <Avatar
            showFallback
            size="lg"
            src={
              user?.image ||
              JSON.parse(atob(localStorage.getItem("auth"))).credentials.image
            }
            className="  border-[5px]  border-white w-[95px] h-[95px]  -mt-12"
          />
          {user?.username ? (
            <Button
              className={`text-default-900/80 dark:text-white  ${
                liked
                  ? "bg-gradient-to-r from-danger to-primary text-white "
                  : "bg-slate-200"
              }  dark:bg-carddm   absolute right-6 top-5`}
              radius="lg"
              variant="light"
              size="lg"
              onPress={() => setLiked((v) => !v)}
            >
              {liked ? "Added to favorite" : "Add to favorite"}
              <HeartIcon
                className={liked ? "[&>path]:stroke-transparent" : ""}
                fill={liked ? "red" : "none"}
              />
            </Button>
          ) : null}
        </div>
        <div>
          <h3 className="text-black text-2xl font-bold dark:text-white">
            {user.username ||
              JSON.parse(atob(localStorage.getItem("auth"))).credentials
                .username ||
              "None"}
          </h3>
          <p className="text-slate-400 text-sm ">
            {user.speciality ||
              JSON.parse(atob(localStorage.getItem("auth"))).credentials
                .speciality ||
             "None"}
          </p>
        </div>
        <div className="flex flex-row justify-center gap-16 w-4/6">
          {counter.map((item, index) => {
            return (
              <Counter key={index} value={item.value} label={item.label} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
