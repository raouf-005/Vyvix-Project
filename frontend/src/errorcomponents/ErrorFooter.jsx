import FooterLower from "../landingcomponents/FooterLower";
import FooterMiddle from "../landingcomponents/FooterMiddle";


export default function ErrorFooter(){
    return(
        <footer className="bg-gradient-to-r divide-y  w-auto text-white  to-indigo-700   from-indigo-500 flex  flex-col ">
            <FooterMiddle />
            <FooterLower/>
        </footer>
    )
}