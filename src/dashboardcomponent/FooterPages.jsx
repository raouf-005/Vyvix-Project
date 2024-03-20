import  {useNavigate} from 'react-router-dom';





export default function FooterPages() {
    const navigate =useNavigate();

    return(
        <div className="flex justify-between py-4 px-6  bg-slate-100">
            <p>
            Privacy Policy | Terms of Service | © 2024 VYVIX
            </p>
            <ul className="flex flex-row [&>li]:cursor-pointer gap-14">
                <li onClick={()=>{navigate('/')}}>Home</li>
                <li>Licence</li>
                <li>Term of Use</li>
                <li>Blog</li>
            </ul>
        

        </div>
    )
}