


export default function HeadBtn({name,currentOpt, onClick}) {

    const selected = currentOpt.toLowerCase() === name.toLowerCase();
    return (
        <button className="items-center flex  relative gap-3    pb-2 pl-8 pr-14  rounded-lg "  onClick={onClick}>  
          <span className={` ${selected? 'bg-gradient-to-r from-danger to-purple-800 bg-clip-text text-transparent font-semibold  text-lg ':'text-gray-600 dark:text-white   opacity-90'}`}>
                {name}
            </span> 
        <div className={` ${selected? 'absolute':'hidden'} left-0 transition  z-20 ease-in-out delay-75 w-full h-1  rounded-3xl  bg-gradient-to-r from-danger to-purple-800 -bottom-[1.3px]`}> 
        </div>

        </button>
    )

    }