
import FooterMiddle from "./FooterMiddle";
import FooterUpper from "./FooterUpper";
import FooterLower from "./FooterLower";
;






export default function Footer(){

    return(
        <footer className="bg-gradient-to-r sm:divide-y  w-auto text-white  to-indigo-700    pt-14 from-indigo-500 flex  flex-col gap-8">
            <FooterUpper/>
            <FooterMiddle/>
            <FooterLower/>           
        </footer>
    )

}   