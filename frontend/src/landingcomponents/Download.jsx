import { GooglePlayButton, AppStoreButton } from "react-mobile-app-button";
import Img from "./../assets/Container2Img.svg";
import React from "react";
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
export default function Download() {
  return (
    <div className="flex flex-row relative  sm:justify-around mobile:mb-10  sm:-mt-32 mobile:mt-0   sm:mb-0">
      <div className=" flex mobile:absolute sm:relative mobile:-bottom-[155px] -z-10 mobile:-right-10 ">
        <img src={Img} loading="lazy" alt="DownloadImg"  />
      </div>

      <div
        className="flex  flex-col sm:mt-36  mobile:h-[380px] mobile:justify-start   sm:h-auto z-10 px-2"
        id="download-section"
      >
        <h1 className="sm:text-5xl mobile:text-3xl text-black font-bold sm:max-w-sm mobile:max-w-[320px] mobile:mt-6 sm:mt-0    sm:mb-4 px-2  ">
          Our Services Made for you?
        </h1>
        <p className="text-gray-800 leading-7 max-w-lg   text-sm sm:block mobile:hidden  ">
          Download now and embark on a journey to personalized success and
          happiness . Set and achieve goals, connect with a vibrant community,
          and experience holistic growth at your fingertips. Your path to a
          thriving life begins with a simple click – join the journey today.
        </p>
        <button className=" w-36 py-4  bg-gradient-to-r mobile:hidden sm:block   from-red-600 to-red-500 font-semibold bg-clip-text text-transparent"
        onClick={()=>{window.open("https://mediafire.com/file/4i2x58lbetew6z2/app-release.apk/file")}}
        >
          Download Now &#8594;
        </button>
        <div className="flex justify-center gap-4 sm:mt-5  mobile:flex-col sm:flex-row mobile:pt-8 sm:pt-0">
          <GooglePlayButton
            url="https://mediafire.com/file/4i2x58lbetew6z2/app-release.apk/file"
            theme="dark"
          />
          <div className=""
            onClick={()=>{toast.error('App  will be available soon for IOS', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "light",
              transition: Bounce,
              });
            }
          }>
          <AppStoreButton
            //url="https://mediafire.com/file/4i2x58lbetew6z2/app-release.apk/file"
          
            theme="dark"
          />

          </div>
        </div>
      </div>
    </div>
  );
}
