"use client";

import AuthHeader from "../_components/authHeader"
import { AuthInput } from "../_components/authInput"
import { loginInputs } from "../_components/authInputsData"
import AuthSocial from "../_components/authSocial";
import {SubmitBtn} from "../_components/submitBtn";
import {loginAction} from "../../../actions/login";
import { useRef } from "react";
import { loginSchema } from "../../../validationSchemas/authSchemas";


function LoginPage() {

    const loginForm = useRef(null)

    const login = async()=> {

        const formData = new FormData(loginForm.current);

        const loginTest = loginSchema.safeParse(Object.fromEntries(formData.entries()));

        if(loginTest.success){
            loginAction(formData);
        }
        
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
                            />
                    ))
                }
                <SubmitBtn text='login' />
            </form>
            <AuthSocial text="don't have an account" link='/auth/register' />
        </div>
    </div>
  )
}

export default LoginPage