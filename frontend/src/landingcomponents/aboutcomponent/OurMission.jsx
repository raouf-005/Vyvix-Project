export default function OurMission() {
    return(
        <div className="flex sm:flex-row mobile:flex-col mobile:px-3 justify-evenly mobile:text-center sm:text-left ">
            <h1 className="text-black  sm:text-5xl mobile:text-3xl     leading-[60px] font-bold">
                Our Mission
            </h1>
            <p className="text-gray-800 sm:max-w-lg mobile:max-w-sm mobile:text-tiny sm:text-lg mt-2">
            Our mission at Vyvix is simple: to empower individuals on their personal growth journey. 
            We believe that everyone has the potential to achieve greatness, and we're here to provide the tools,
             resources, and support to help you thrive.
            <span className="block sm:mt-3 mobile:mt-1">
            Whether you're striving to improve your fitness, further your education, manage your finances, 
            or develop better habits, Vyvix is here to guide you every step of the way.
            </span>
            </p>
        </div>
    )
}