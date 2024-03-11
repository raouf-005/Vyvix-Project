import React ,{useContext}from "react";
import InputLogin from "./InputLogin";  
import { Button ,Checkbox} from "@nextui-org/react";
import { formvalue } from "../pages/Login";

export default function LoginForm(){

    const formik = useContext(formvalue)
    return(
    <div className="flex flex-col gap-5  align-middle ">
           <>
            <InputLogin 
                    type="text"
                    placeholder="Enter you Username or Email" 
                    name="Useremail" 
                    formikfield={formik.getFieldProps('useremail')}
                    />
                <InputLogin
                    placeholder="Enter your Password"
                    name="Password"
                type="password"
                formikfield={formik.getFieldProps('password')}
                />
                <div className="flex  justify-between mt-2">
                    <Checkbox size="sm" radius="none" className="gap-1 ml-2">
                    Remember me 
                    </Checkbox>
                    <a href="#" className="text-blue-800  mr-2 ">Forget Password ?</a>
                </div>
                <div className="flex justify-end mr-5
                ">  
                    <Button className=" bg-blue-800 text-white px-12 mt-3 " type="submit" size="lg" radius="lg" >Login</Button>
                </div>

           </>
          
            
    </div>
    )
}