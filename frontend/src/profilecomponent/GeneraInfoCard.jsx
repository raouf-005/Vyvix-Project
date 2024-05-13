const LitlleCard = ({title, value}) => {
    return (
        <div className=" rounded-xl p-3 pl-5 shadow-lg shadow-gray-200 dark:bg-ltdm   dark:shadow-sm dark:shadow-slate-100/40">
            <h4 className=" text-sm ">{title}</h4>
            <p className="text-black dark:text-white">{value}</p>
        </div>
    )
}








export default function GeneralInfoCard(props) {

    const user =atob(localStorage.getItem('auth'));
    

    const data = {
      education: props.education || user?.credentials?.education || "Bsc. Computer Science",
      languages: props.languages || user?.credentials?.languages || "English",
      speciality: props.speciality || user?.credentials?.speciality || "23",
      workHistory: props.workHistory || user?.credentials?.workHistory || "Lagos",
      organization: props.organization || user?.credentials?.organization || "Singing",
      dateofbirth: props.dateofbirth || user?.credentials?.dateofbirth || "Coding"  
    }


    return (
        <div className="flex flex-col text-slate-400 bg-white rounded-2xl dark:bg-carddm dark:shadow-none p-5 shadow-sm shadow-gray-200">
            <div className="gap-3 flex flex-col">
                <h3 className="text-black font-bold text-2xl dark:text-white">
                    General Information
                </h3>
                <p className="text-sm">
                    As we live, our hearts turn colder.
                    Cause pain is what we go through as we become older.
                    We get insulted by others, lose trust for those others. We get back stabbed by friends.
                    It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all...
                </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-4 mt-6">
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