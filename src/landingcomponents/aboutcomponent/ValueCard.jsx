

export default function ValueCard({title, description, icon}) {
    return(
        <div className="flex flex-row gap-7 bg-gray-50 p-6 rounded-3xl">
            <div className="  bg-gradient-to-tr from-rose-600 via-fuchsia-700 to-blue-700 justify-center flex items-center    rounded-3xl  w-28     h-[134px]">
                <img src={icon} alt=""  className=" h-14 "/>
            </div>
            <div className="flex flex-col mt-4 gap-2  items-start">
                <h3 className=" font-bold text-black text-lg">
                    {title}
                </h3>
                <p className=" max-w-sm text-left text-black ">
                    {description}
                </p>
            </div>
        </div>
    )
}