"use client";

import {useSearchParams } from "next/navigation";
import AuthHeader from "../_components/authHeader";
import { IoLockClosed } from "react-icons/io5";
import { useRef, useState, useTransition } from "react";
import { ErrorSucces } from "../_components/errorSucces";
import { AuthInput } from "../_components/authInput";
import {newPasswordAction} from "@/actions/auth/newPassword";
import { LuSend } from "react-icons/lu";
import { ButtonWithIcon } from "@/ui/buttons/buttons";
import Link from "next/link";

export default function NewPasswordPage() {

    const token = useSearchParams().get("token");
    const [error,setError] = useState(null);
    const [success,setSuccess] = useState(null);
    const [isLoading,startTranation] = useTransition();
    const newPasswordForm = useRef();

    const newPassword = ()=> {
        setError(null);
        setSuccess(null);

        const formData = new FormData(newPasswordForm.current);

        formData.append("token",token)

        startTranation(()=> {
            newPasswordAction(formData)
            .then((data)=> {
                if(data.error) {
                    setError(data.error)
                }
                if(data.success){
                    setSuccess(data.success);
                }
            })
        })

    }
    
  return (
    <div className=" bg-white dark:bg-stone-950 w-[450px] p-4 rounded-md shadow-md">
        <AuthHeader text='new password' />
        <form ref={newPasswordForm} action={newPassword}>

            {
                success ? null : 
                <>
                    <AuthInput 
                        type='password' 
                        name='new_password'
                        Icon={IoLockClosed}
                        isLoading={isLoading}
                        />
                    <AuthInput 
                        type='password' 
                        name='confirm_password'
                        Icon={IoLockClosed}
                        isLoading={isLoading}
                        />
                </>
            }
                <ErrorSucces error={error} success={success} />

                {
                    success ?

                    <div className="text-center">

                        <Link 
                            className=" capitalize text-teal-950 dark:text-teal-50 hover:scale-110"
                            href='/auth/login'
                            > go back to logIn
                        </Link>

                    </div>
                    
                    :
                   <ButtonWithIcon 
                        text='send new password' 
                        Icon={LuSend} 
                        type='primary' 
                        disabled={isLoading} 
                        onClick={()=> ''}
                    />
                }


        </form>
    </div>
  )
};