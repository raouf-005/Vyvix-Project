const LitlleCard = ({title, value}) => {
    return (
        <div className=" rounded-xl p-3 pl-5 shadow-lg shadow-gray-200 dark:bg-ltdm  dark:shadow-md">
            <h4 className=" text-sm ">{title}</h4>
            <p className="text-black dark:text-white">{value}</p>
        </div>
    )
}








export default function GeneralInfoCard() {
    return (
        <div className="flex flex-col gap-3 text-slate-400 bg-white rounded-2xl dark:bg-carddm dark:shadow-none p-5 shadow-sm shadow-gray-200">
            <h3 className=" text-black font-bold text-2xl dark:text-white">
                General Information
            </h3>
            <p className=" text-sm"  >
            As we live, our hearts turn colder.
             Cause pain is what we go through as we become older.
              We get insulted by others, lose trust for those others. We get back stabbed by friends.
             It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all...
            </p>
            <div className="grid grid-cols-2 grid-rows-3 gap-4 mt-6">
                <LitlleCard title="Age" value="23"/>
                <LitlleCard title="Education" value="Bsc. Computer Science"/>
                <LitlleCard title="Location" value="Lagos"/>
                <LitlleCard title="Hobbies" value="Singing"/>
                <LitlleCard title="Skills" value="Coding"/>
                <LitlleCard title="Languages" value="English"/>
            </div>


        </div>
    
    
        )
    }