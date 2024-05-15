
import FooterMiddle from "./FooterMiddle";
import FooterUpper from "./FooterUpper";
import FooterLower from "./FooterLower";
;






export default function Footer(){

    return(
        <footer className="bg-gradient-to-r sm:divide-y  w-auto text-white  to-indigo-700    sm:pt-14 mobile:pt-10 from-indigo-500 flex  flex-col gap-8">
            <FooterUpper/>
            <FooterMiddle/>
            <FooterLower/>           
        </footer>
    )

}   