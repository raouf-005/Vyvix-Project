

export default function ValueCard({title, description, icon}) {
    return(
        <div className="flex sm:flex-row mobile:hover:animate-shake   duration-150  sm:animate-none  mobile:flex-col-reverse  sm:gap-7 mobile:gap-3   mobile:justify-center bg-gray-50 sm:p-6 mobile:p-2 rounded-3xl">
            <div className="  bg-gradient-to-tr from-rose-600 via-fuchsia-700 to-blue-700 justify-center flex items-center    rounded-3xl  sm:w-28 mobile:w-[80px]  mobile:h-24  sm:h-[134px]">
                <img src={icon} alt="Icon" loading="lazy"  className=" sm:h-14 mobile:h-12 "/>
            </div>
            <div className="flex flex-col mt-4 gap-2  items-start">
                <h3 className=" font-bold text-black text-lg">
                    {title}
                </h3>
                <p className="sm:block mobile:hidden max-w-sm text-left text-black ">
                    {description}
                </p>
            </div>
        </div>
    )
}