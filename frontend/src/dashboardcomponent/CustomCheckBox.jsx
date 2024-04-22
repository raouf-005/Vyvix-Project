import { Checkbox ,Image,cn} from "@nextui-org/react";
import threepoints from '../assets/threepoints.svg';
import CheckMark from '../assets/CheckMark.jsx';


export default function CustomCheckbox({ children, ...props }) {
    return (    
        <Checkbox 
        classNames={{
            base: cn(
              "inline-flex max-w-sm  bg-content1 m-0",
              "hover:bg-content2 items-center justify-start",
              "cursor-pointer ",
              "data-[selected=true]:bg-slate-100"
            ),
            label: "w-[87%]",
        
            
          }}
          icon= {<CheckMark/>}
          radius="md"
          color="danger"
          {...props}
        >


            <div className="flex justify-between ">
                <span>{children}</span>
                <Image src={threepoints}/>
            </div>

        </Checkbox>
    );
}