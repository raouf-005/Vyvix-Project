
import { Listbox ,ListboxItem,Switch, Button,Image} from "@nextui-org/react"
import threepoints from '../assets/threepoints.svg';


const list = [
    "Vyvix Notifications",
    "Email Notifications",
    "Weekly Progress Reports",
    "Goal Tracking Alerts",
    "Privacy Controls",
    "Hiring"
]

export default function Settings() {
    return(
        <div className="flex flex-col gap-1 rounded-xl   min-w-96 shadow-sm bg-white dark:bg-carddm  p-5 ">
            <div className="flex justify-between ">
                 <h3 className='text-black  font-bold text-2xl dark:text-white'>Settings</h3>
                <Button isIconOnly  className='mr-4'>
                        <Image src={threepoints} />
                </Button>
            </div>
            <Listbox aria-label=""  >  
                {
                    list.map((item,index) => {
                        return(
                            <ListboxItem key={index} value={item} className='flex justify-between'>
                                <Switch className='text-black dark:text-white'>{item}</Switch>
                               
                            </ListboxItem>
                        )
                    })
                }



            </Listbox>


        </div>
    )
}