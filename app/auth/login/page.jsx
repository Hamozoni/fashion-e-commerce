"use client";

import AuthHeader from "../_components/authHeader"
import { AuthInput } from "../_components/authInput"
import { loginInputs } from "../_components/authInputsData"
import AuthSocial from "../_components/authSocial";
import {loginAction} from "@/actions/auth/login";
import { useContext, useRef, useState, useTransition } from "react";
import { ErrorSucces } from "../_components/errorSucces";
import { useRouter, useSearchParams } from "next/navigation";
import { AppContext } from "../../contextProvider";
import { ButtonWithIcon } from "@/ui/buttons/buttons";

import { BiLogInCircle } from "react-icons/bi";
import { useSession } from "next-auth/react";
import { Loading } from "@/ui/models/loading";

import loginImage from "@/public/login-image.jpg"
import Image from "next/image";


function LoginPage() {

    const callback = useSearchParams().get("callback");
    const loginForm = useRef(null);

    const [isLoading,startTranation] = useTransition();
    const [serverErrror,setServerErrror] = useState(null);
    const [serverSucces,setServerSuccess] = useState(null);
    const {currentUser,innerWidth} = useContext(AppContext);

    const router = useRouter();

    if(currentUser) {
         router.push("/");
    };

    const {update} = useSession()


    const login = ()=> {

        const formData = new FormData(loginForm.current);

        setServerErrror(null);
        setServerSuccess(null);

        startTranation(()=> {
            

             loginAction(formData,callback)
            .then((data)=> {
                if(data.error){
                    setServerErrror(data?.error);
                }else {
                    update()
                    setServerSuccess(data?.success);
                }
            })
            .catch(()=> {
                setServerErrror('oops! something went wrong')
            })

        })
        
    };

  return (
    <div className="p-4 w-full flex items-stretch justify-center">
        <div className="bg-white dark:bg-stone-950 border border-teal-100 dark:border-stone-800 w-full sm:max-w-[450px] p-4">
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
                <ErrorSucces 
                    error={serverErrror} 
                    success={serverSucces} 
                    />

                <ButtonWithIcon 
                    text='logIn' 
                    Icon={BiLogInCircle} 
                    type='primary' 
                    onClick={()=>''} 
                    disabled={isLoading}
                    />
            </form>
            
            <AuthSocial 
                text="don't have an account?" 
                link='/auth/register'
                page='logIn' 
                />
        </div>
        {
            innerWidth > 910 ?
            <div className="">
                <Image src={loginImage} height={450} width={450} alt="login"/>
            </div>
            : null
        }
        {
            isLoading ? 
            <Loading />
            :null
        }
    </div>
  )
}

export default LoginPage