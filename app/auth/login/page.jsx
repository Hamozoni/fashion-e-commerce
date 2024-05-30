"use client";

import AuthHeader from "../_components/authHeader"
import { AuthInput } from "../_components/authInput"
import { loginInputs } from "../_components/authInputsData"
import AuthSocial from "../_components/authSocial";
import {SubmitBtn} from "../_components/submitBtn";
import {loginAction} from "../../../actions/login";
import { useRef, useState, useTransition } from "react";
import { loginSchema } from "../../../validationSchemas/authSchemas";

import { BiError } from "react-icons/bi";


function LoginPage() {

    const loginForm = useRef(null);
    const [isLoading,startTranation] = useTransition();
    const [serverErrror,setServerErrror] = useState(null);

    const login = async()=> {

        const formData = new FormData(loginForm.current);

        startTranation(()=> {
            setServerErrror(null);
            loginAction(formData)
            .then((data)=> {
                if(data?.error){
                    setServerErrror(data.error);
                }
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
                {
                    serverErrror &&
                    <h4 
                        className="w-full p-2 my-3 font-medium capitalize rounded-md bg-rose-200 text-green-900 flex items-center justify-center">
                        <BiError size={22} /> {serverErrror}
                    </h4>
                }
                <SubmitBtn isLoading={isLoading} text='login' />
            </form>
            <AuthSocial text="don't have an account" link='/auth/register' />
        </div>
    </div>
  )
}

export default LoginPage