
import { Listbox ,ListboxItem,Switch, Button} from "@nextui-org/react"


export default function NotificationCard() {
    return(
        <div className="flex flex-col gap-3 rounded-xl  min-w-80 shadow-sm bg-white dark:bg-carddm  p-5 ">
            <div className="flex justify-between ">
                 <h3 className='text-black  font-bold text-2xl dark:text-white'>Notification</h3>
                <Button isIconOnly  className='mr-4'>

                </Button>
            </div>
            <Listbox >
                <ListboxItem >
                <Switch>
                    Vyvix Notifications
                </Switch>
                    
                </ListboxItem>



            </Listbox>


        </div>
    )
}