const LitlleCard = ({title, value}) => {

    let formattedValue = value;

    switch (title) {
        case "Languages":
            formattedValue = value.join(", ");
            break;
        case "Dateofbirth":
            formattedValue = value.split("T")[0];
            break;
        default:
            formattedValue = value;
            break;
    }



    return (
        <div className=" rounded-xl p-3 pl-5 shadow-lg  shadow-gray-200 dark:bg-ltdm   dark:shadow-sm dark:shadow-slate-100/40">
            <h4 className=" text-sm ">{title}</h4>
            <p className="text-black dark:text-white max-h-11">{formattedValue}</p>
        </div>
    )
}








export default function GeneralInfoCard(props) {

    const user =JSON.parse(atob(localStorage.getItem('auth')));
    const user2 =props.user ?props.user :user.credentials;

  //  console.log('props',props)

    const data = {
      education: user2.education  || "Empty",
      languages: user2.languages || "Empty",
      speciality: user2.speciality  || "Empty",
      workHistory: user2.workHistory  || "Empty",
      organization: user2.organization || "Empty",
      dateofbirth: user2.dateofbirth || "Empty ",
      bio: user2.bio  || "Empty bio",
    }


    return (
        <div className="flex flex-col text-slate-400 bg-white rounded-2xl dark:bg-carddm dark:shadow-none p-5 shadow-sm shadow-gray-200">
            <div className="gap-3 flex flex-col">
                <h3 className="text-black font-bold text-2xl dark:text-white">
                    General Information
                </h3>
                <p className="text-sm min-h-[105px] max-w-[600px] break-words ">
                {data.bio}    
            </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-4 ">
                <LitlleCard title="Education" value={data.education} />
                <LitlleCard title="Languages" value={data.languages} />
                <LitlleCard title="Speciality" value={data.speciality} />
                <LitlleCard title="Work history" value={data.workHistory} />
                <LitlleCard title="Organization" value={data.organization} />
                <LitlleCard title="Dateofbirth" value={data.dateofbirth} />
            </div>
        </div>
    );
    }