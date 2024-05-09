import React from "react";
import InputLogin from "./InputLogin";  
import { Button ,Checkbox} from "@nextui-org/react";
import useFormLogin from "../customHooks/useformlogin";

export default function LoginForm(){

    const formik = useFormLogin();
   
 
    return(
    <form className="flex flex-col gap-5  align-middle " onSubmit={formik.handleSubmit}>
           
            <InputLogin 
                    type="text"
                    placeholder="Enter you Username or Email" 
                    name="Useremail" 
                  formik={formik}
                    />
                <InputLogin
                    placeholder="Enter your Password"
                    name="Password"
                    type="password"
                    formik={formik}
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
            
    </form>
    )
}