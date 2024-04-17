import { GooglePlayButton ,AppStoreButton } from "react-mobile-app-button";
import Img from './../assets/Container2Img.svg'
export default function Download(){
    return(
        <div className="flex flex-row  justify-around "  id="download-section"  >
           <div className=" flex">
                <img src={Img} alt="" className="" />
            </div> 

            <div className="flex  flex-col mt-36">
                <h1 className="text-5xl text-black font-bold max-w-sm mb-4 ">Our Services Made for you?</h1>
                <p className="text-gray-800 leading-7 max-w-lg  ">
                    Download now and embark on a journey to personalized success and happiness
                    . Set and achieve goals, connect with a vibrant community, and experience
                     holistic growth at your fingertips. Your path to a thriving life begins with a simple click
                      – join the journey today.
                </p>
                <button className=" w-36 py-4  bg-gradient-to-r    from-red-600 to-red-500 font-semibold bg-clip-text text-transparent">
                    Download Now &#8594;
                </button>
                    <div className="flex justify-center gap-4 mt-5 ">
                        <GooglePlayButton
                            url="https://play.google.com/store/apps/details?id=com.vyvix"  
                            theme="dark"
                            height={60}
                            width={180}
                        />
                        <AppStoreButton  
                            url="https://apps.apple.com/us/app/vyvix/id1580070475"
                            theme="dark"
                            height={60}
                            width={180}
                        />
                    </div>
            </div>
        </div>
    )
}