import React from "react";

const width = 24;
const height = 21;

//Reset every width to it's orginal width and change it from the component it self 
export const HomeImg = ({selected}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.0001 16V11H12.0001V16C12.0001 16.55 12.4501 17 13.0001 17H16.0001C16.5501 17 17.0001 16.55 17.0001 16V8.99997H18.7001C19.1601 8.99997 19.3801 8.42997 19.0301 8.12997L10.6701 0.599971C10.2901 0.259971 9.7101 0.259971 9.3301 0.599971L0.970098 8.12997C0.630098 8.42997 0.840098 8.99997 1.3001 8.99997H3.0001V16C3.0001 16.55 3.4501 17 4.0001 17H7.0001C7.5501 17 8.0001 16.55 8.0001 16Z" fill="url(#paint0_linear_546_7901)"/>
            <defs>
            {
                selected ? (
                    <linearGradient id="paint0_linear_546_7901" x1="0.802246" y1="0.344971" x2="17.3749" y2="18.6541" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FE4768"/>
                        <stop offset="1" stopColor="#4B2CFA"/>
                    </linearGradient>      
                ):(
                    <linearGradient id="paint0_linear_546_7901" x1="0.802246" y1="0.344971" x2="17.3749" y2="18.6541" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#A3AED0"/>
                    </linearGradient>
                )
            }
            </defs>
        </svg>
    )
}

export const ProfileImg = ({selected}) => {
    return(
        <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z" fill="url(#paint0_linear_636_710)"/>
        <defs>
        {
            selected ? (
                <linearGradient id="paint0_linear_636_710" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FE4768"/>
                    <stop offset="1" stopColor="#4B2CFA"/>
                </linearGradient>

            ):(
                <linearGradient id="paint0_linear_636_710" x1="0" y1="0" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A3AED0"/>
                </linearGradient>
            )
        }
        </defs>
        </svg>

    )
}

export const RankingImg = ({selected}) => {
    return(
        <svg width={width} height={height+4} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_636_831)">
                <path d="M7.46683 10.7333H7.70016C8.5985 10.7333 9.3335 11.4683 9.3335 12.3666V20.5333C9.3335 21.4316 8.5985 22.1666 7.70016 22.1666H7.46683C6.5685 22.1666 5.8335 21.4316 5.8335 20.5333V12.3666C5.8335 11.4683 6.5685 10.7333 7.46683 10.7333ZM14.0002 5.83325C14.8985 5.83325 15.6335 6.56825 15.6335 7.46659V20.5333C15.6335 21.4316 14.8985 22.1666 14.0002 22.1666C13.1018 22.1666 12.3668 21.4316 12.3668 20.5333V7.46659C12.3668 6.56825 13.1018 5.83325 14.0002 5.83325ZM20.5335 15.1666C21.4318 15.1666 22.1668 15.9016 22.1668 16.7999V20.5333C22.1668 21.4316 21.4318 22.1666 20.5335 22.1666C19.6352 22.1666 18.9002 21.4316 18.9002 20.5333V16.7999C18.9002 15.9016 19.6352 15.1666 20.5335 15.1666Z" fill={selected ? "url(#paint0_linear_636_831)" : "#A3AED0"}/>
            </g>
            <defs>
                {
                    selected? ( 
                    <linearGradient id="paint0_linear_636_831" x1="5.8335" y1="5.83325" x2="22.1668" y2="22.1666" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FE4768"/>
                        <stop offset="1" stopColor="#4B2CFA"/>
                    </linearGradient>):(
                        <linearGradient id="paint0_linear_636_831" x1="5.8335" y1="5.83325" x2="22.1668" y2="22.1666" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#A3AED0"/>
                        </linearGradient>
                    )
                }
               
                <clipPath id="clip0_636_831">
                    <rect width="24" height="24" fill="white"/>
                </clipPath>
            </defs>
        </svg>
    )
}

 

export const VyvixLogo = ({darkMode}) => {


    const Color =darkMode?(
                            <stop stopColor="white"/>
                        )
                        :(
                            <>
                            <stop stopColor="#FE4768"/>
                            <stop offset="1" stopColor="#4B2CFA"/>
                            </>
                        )

    return(
        <svg width="90" height="76" viewBox="0 0 100 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M59.5114 6.6058C59.5114 8.35776 58.8154 10.038 57.5766 11.2768C56.3378 12.5156 54.6576 13.2116 52.9056 13.2116C51.1536 13.2116 49.4734 12.5156 48.2346 11.2768C46.9958 10.038 46.2998 8.35776 46.2998 6.6058C46.2998 4.85383 46.9958 3.17362 48.2346 1.93479C49.4734 0.695965 51.1536 0 52.9056 0C54.6576 0 56.3378 0.695965 57.5766 1.93479C58.8154 3.17362 59.5114 4.85383 59.5114 6.6058Z" fill="url(#paint0_linear_546_7903)"/>
                <path d="M70.6862 23.3122C69.6335 25.5893 68.4909 27.8195 67.3524 30.0227C66.016 32.606 64.5588 35.1749 62.9807 37.7295C62.3121 38.8103 61.5817 39.8871 60.8486 40.9706C59.5633 42.87 58.1544 44.4772 56.622 45.792C56.1377 46.2092 55.5541 46.5305 54.8712 46.7561C54.0468 47.0286 53.0788 46.9977 52.2221 46.9306C50.9775 46.8313 49.9491 46.219 49.0105 45.3543C47.5135 43.9741 46.2541 42.4516 45.0565 40.737C43.6588 38.7338 42.3739 36.7789 41.1803 34.6669C40.1733 32.8826 39.1945 31.125 38.2681 29.3648C37.1443 27.23 36.0822 25.1328 35.0753 23.0611C34.2643 21.3945 33.486 19.7461 32.7404 18.1162C32.0064 16.5113 31.7853 14.8549 32.0771 13.1471C32.8075 8.87343 37.923 8.74857 41.1749 9.23864C42.0798 9.37424 42.4987 9.86296 42.923 10.7075C43.094 11.0485 43.2618 11.3703 43.4265 11.6728C44.3475 13.3717 45.5577 14.7555 47.057 15.8243C49.0428 17.2408 51.434 17.6959 53.9448 17.555C56.6739 17.401 58.9439 16.3081 60.7546 14.2762C61.7196 13.1941 62.5542 11.9226 63.2587 10.4618C63.5979 9.75913 64.1287 9.35142 64.851 9.23864C67.2732 8.86135 70.3787 8.83584 72.3255 10.5329C73.213 11.3063 73.7071 12.3764 73.7903 13.4988C73.8615 14.4696 73.8816 15.6014 73.6359 16.5507C73.4498 17.2694 73.2112 17.9345 72.9203 18.5458C72.1684 20.1301 71.4237 21.7189 70.6862 23.3122Z" fill="url(#paint1_linear_546_7903)"/>
                <path d="M77.7564 50.4057C77.7564 51.3557 77.379 52.2668 76.7072 52.9386C76.0354 53.6104 75.1243 53.9878 74.1742 53.9878C73.2242 53.9878 72.313 53.6104 71.6412 52.9386C70.9695 52.2668 70.592 51.3557 70.592 50.4057C70.592 49.4556 70.9695 48.5445 71.6412 47.8727C72.313 47.2009 73.2242 46.8235 74.1742 46.8235C75.1243 46.8235 76.0354 47.2009 76.7072 47.8727C77.379 48.5445 77.7564 49.4556 77.7564 50.4057Z" fill="url(#paint2_linear_546_7903)"/>
                <path d="M12.9565 67.4636C12.9592 67.4627 12.9633 67.461 12.9686 67.4583C12.9767 67.4547 12.9821 67.4493 12.9847 67.4422C15.1822 61.7171 17.2033 56.4294 19.0481 51.5788C19.331 50.8341 19.7888 50.2273 20.4216 49.7582C21.8878 48.6693 24.028 49.0399 25.1665 50.3893C26.3293 51.7641 25.8916 53.3753 25.2739 54.8482C22.5752 61.292 19.868 67.7501 17.1523 74.2225C16.2125 76.4593 14.7799 77.3589 12.3456 77.1629C10.6418 77.0246 9.55026 76.0834 8.90176 74.5447C6.11265 67.913 3.36426 61.3725 0.656603 54.9234C0.431039 54.3863 0.247989 53.8358 0.107459 53.2719C-0.464506 50.972 1.32523 49.0762 3.61444 49.1285C5.09537 49.1621 6.26751 50.1355 6.79382 51.5037C8.78541 56.6863 10.8267 62.0018 12.9176 67.4502C12.9191 67.454 12.9213 67.4575 12.9242 67.4603C12.9271 67.4631 12.9306 67.4653 12.9343 67.4666C12.9381 67.4679 12.942 67.4683 12.9459 67.4678C12.9497 67.4673 12.9534 67.4658 12.9565 67.4636Z" fill="url(#paint3_linear_546_7903)"/>
                <path d="M36.5426 67.6101C37.8423 64.7557 39.1004 61.9889 40.3168 59.3099C40.9787 57.8518 42.2891 56.7925 43.9674 57.0986C45.0469 57.2955 45.8436 57.8746 46.3573 58.836C46.9481 59.9409 46.6259 61.097 46.1184 62.1845C43.9755 66.7799 41.8443 71.3471 39.7247 75.8862C38.809 77.8464 37.9135 79.7436 36.8098 81.4823C35.9344 82.8598 34.7354 84.2965 33.3257 85.051C31.6339 85.956 29.5408 85.5465 28.7607 83.6627C28.3431 82.6504 28.6036 81.4353 29.2803 80.6069C29.6562 80.1468 30.0724 79.65 30.5289 79.1166C31.518 77.9619 32.3388 76.715 32.9913 75.376C32.9972 75.3633 33.0003 75.3496 33.0003 75.3357C33.0003 75.3218 32.9972 75.308 32.9913 75.2954C30.9792 70.9775 28.946 66.6201 26.8917 62.2234C26.4809 61.3467 26.0902 60.2229 26.4433 59.3059C26.9875 57.8943 28.011 57.1429 29.5139 57.0516C31.1586 56.9509 32.2005 58.2492 32.8141 59.6066C34.0332 62.3009 35.2456 64.9687 36.4513 67.6101C36.4818 67.6764 36.5122 67.6764 36.5426 67.6101Z" fill="url(#paint4_linear_546_7903)"/>
                <path d="M57.8961 67.853C57.8999 67.8609 57.9059 67.8676 57.9134 67.8723C57.9209 67.877 57.9295 67.8795 57.9383 67.8795C57.9472 67.8795 57.9558 67.877 57.9633 67.8723C57.9708 67.8676 57.9768 67.8609 57.9806 67.853C59.2517 65.1668 60.6033 62.2936 62.0354 59.2332C62.6114 58.0034 63.6949 57.0407 65.0819 57.0474C66.548 57.0555 67.7658 57.9322 68.2357 59.3259C68.5419 60.2335 68.2438 61.3103 67.8396 62.1387C66.0378 65.8292 64.1528 69.7157 62.1844 73.7982C61.6537 74.8974 61.2388 75.6036 60.9398 75.9169C59.3085 77.6261 56.5856 77.6234 54.9328 75.9115C54.6607 75.6296 54.313 75.05 53.8896 74.1728C51.9159 70.084 49.987 66.1093 48.1028 62.2488C47.6114 61.2405 47.2744 60.0536 47.7739 59.0077C48.3566 57.785 49.3295 57.1333 50.6928 57.0528C52.0811 56.9709 53.2304 57.9362 53.8091 59.1553C55.2287 62.1494 56.591 65.0486 57.8961 67.853Z" fill="url(#paint5_linear_546_7903)"/>
                <path d="M77.4624 73.6893C77.4611 75.7342 76.4675 77.1708 74.271 77.1869C72.0838 77.203 70.9936 75.8456 70.9896 73.7377C70.9815 69.3025 70.9824 64.8574 70.9923 60.4025C70.9936 59.7581 71.1399 59.033 71.4447 58.4651C72.1778 57.101 73.9044 56.8231 75.3236 57.1802C76.9173 57.5803 77.4624 59.0424 77.4638 60.5301C77.4656 64.9984 77.4651 69.3848 77.4624 73.6893Z" fill="url(#paint6_linear_546_7903)"/>
                <path d="M90.1584 71.6206C89.0145 73.0241 87.8849 74.4106 86.7696 75.7801C85.5733 77.2476 83.8238 77.6853 82.2019 76.4877C81.5959 76.0393 81.1824 75.427 80.9613 74.651C80.6243 73.4654 81.2164 72.3953 81.979 71.5146C83.242 70.0573 84.4831 68.6238 85.7022 67.2141C85.7362 67.1747 85.7362 67.1353 85.7022 67.0959C84.3103 65.4982 83.0241 64.0132 81.8434 62.641C81.2688 61.9737 80.6659 60.9318 80.8458 60.0081C81.4353 56.9912 84.7596 55.9762 86.7897 58.4762C87.8961 59.8394 89.027 61.2281 90.1826 62.6424C90.1871 62.6477 90.1928 62.6521 90.1992 62.655C90.2055 62.658 90.2125 62.6595 90.2195 62.6595C90.2265 62.6595 90.2335 62.658 90.2399 62.655C90.2462 62.6521 90.2519 62.6477 90.2564 62.6424C91.3896 61.2478 92.5407 59.8376 93.7097 58.4117C94.8657 57.0006 96.7911 56.532 98.2921 57.7646C99.3287 58.6185 99.9704 60.0887 99.3877 61.3883C99.1899 61.8305 98.9487 62.2185 98.6641 62.5524C97.4745 63.9461 96.1645 65.4606 94.7341 67.0959C94.7001 67.1353 94.7001 67.1742 94.7341 67.2127C96.0034 68.6762 97.257 70.1258 98.4949 71.5615C99.0601 72.2167 99.5851 73.0747 99.5744 73.9528C99.5529 75.8741 97.5792 77.5417 95.6955 77.1174C94.7288 76.8999 94.0481 76.2662 93.4264 75.4928C92.3908 74.2065 91.3404 72.9158 90.2752 71.6206C90.2367 71.5732 90.1978 71.5732 90.1584 71.6206Z" fill="url(#paint7_linear_546_7903)"/>
                <defs>
                <linearGradient id="paint0_linear_546_7903" x1="46.2998" y1="0" x2="59.5114" y2="13.2116" gradientUnits="userSpaceOnUse">
                    
                {Color}
                   
                </linearGradient>
                <linearGradient id="paint1_linear_546_7903" x1="31.9526" y1="9.0293" x2="69.716" y2="50.711" gradientUnits="userSpaceOnUse">
                {Color}
                </linearGradient>
                <linearGradient id="paint2_linear_546_7903" x1="70.592" y1="46.8235" x2="77.7564" y2="53.9878" gradientUnits="userSpaceOnUse">
                {Color}
                </linearGradient>
                <linearGradient id="paint3_linear_546_7903" x1="0" y1="49.1213" x2="27.9767" y2="74.9309" gradientUnits="userSpaceOnUse">
                {Color}
                </linearGradient>
                <linearGradient id="paint4_linear_546_7903" x1="26.3057" y1="57.0457" x2="53.2489" y2="76.3254" gradientUnits="userSpaceOnUse">
                {Color}
                </linearGradient>
                <linearGradient id="paint5_linear_546_7903" x1="47.5276" y1="57.0474" x2="67.6661" y2="77.8699" gradientUnits="userSpaceOnUse">
                {Color}
                </linearGradient>
                <linearGradient id="paint6_linear_546_7903" x1="70.9841" y1="57.0383" x2="82.7304" y2="60.8164" gradientUnits="userSpaceOnUse">
                {Color}
                </linearGradient>
                <linearGradient id="paint7_linear_546_7903" x1="80.8135" y1="57.0535" x2="100.897" y2="75.8043" gradientUnits="userSpaceOnUse">
                {Color}
                </linearGradient>
                </defs>
        </svg>

    )

    }