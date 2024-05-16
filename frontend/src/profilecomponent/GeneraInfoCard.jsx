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
    const user2 =props.user||''
    console.log('props',props)

    const data = {
      education: user2.education || user?.credentials?.education || "Empty",
      languages: user2.languages || user?.credentials?.languages || "Empty",
      speciality: user2.speciality || user?.credentials?.speciality || "Empty",
      workHistory: user2.workHistory || user?.credentials?.workHistory || "Empty",
      organization: user2.organization || user?.credentials?.organization || "Empty",
      dateofbirth: user2.dateofbirth || user?.credentials?.dateofbirth || "Empty"  
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