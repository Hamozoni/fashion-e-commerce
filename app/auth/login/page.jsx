"use client";

import AuthHeader from "../_components/authHeader"
import { AuthInput } from "../_components/authInput"
import { loginInputs } from "../_components/authInputsData"
import AuthSocial from "../_components/authSocial";
import {SubmitBtn} from "../_components/submitBtn";
import {loginAction} from "../../../actions/login";
import { useRef, useState, useTransition } from "react";
import { ErrorSucces } from "../_components/errorSucces";


function LoginPage() {

    const loginForm = useRef(null);
    const [isLoading,startTranation] = useTransition();
    const [serverErrror,setServerErrror] = useState(null);
    const [serverSucces,setServerSuccess] = useState(null);

    const login = ()=> {

        const formData = new FormData(loginForm.current);

        setServerErrror(null);
        setServerSuccess(null);

        startTranation(()=> {
            

             loginAction(formData)
            .then((data)=> {
                console.log(data)
                if(data.error){
                    setServerErrror(data?.error);
                }else {
                    setServerSuccess(data?.success);
                }
            })
            .catch((error)=> {
                console.log(error)
            })

        })
        
    };

  return (
    <div>
        <div className="bg-white w-[450px] p-4 rounded-md shadow-md">
            <AuthHeader text='login'/>
            <form ref={loginForm} action={login}>
                {
                    loginInputs?.map(input=> (
                        <AuthInput 
                            key={input.name} 
                            type={input.type} 
                            name={input.name} 
                            Icon={input.Icon}
                            isLoading={isLoading}
                            />
                    ))
                }
                <ErrorSucces error={serverErrror} success={serverSucces} />
                <SubmitBtn isLoading={isLoading} text='login' />
            </form>
            <AuthSocial text="don't have an account" link='/auth/register' />
        </div>
    </div>
  )
}

export default LoginPage