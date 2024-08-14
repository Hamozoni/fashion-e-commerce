"use client";

import { useRef, useState, useTransition } from "react";
import { AuthInput } from "../_components/authInput";

import {resetPasswordAction} from "@/actions/auth/resetPassword";
import AuthHeader from "../_components/authHeader";
import { ErrorSucces } from "../_components/errorSucces";
import { ButtonWithIcon } from "@/ui/buttons/buttons";

import { MdOutlineMail } from "react-icons/md";
import { LuSend } from "react-icons/lu";

const ResetPassword = ()=> {

    const [isLoading,startTranation] = useTransition();
    const [error,setError] = useState(null);
    const [success,setSuccess] = useState(null);
    const resetForm = useRef();

    const reset = ()=> {

        const formData = new FormData(resetForm.current);
        setError(null);
        setSuccess(null);

        startTranation(()=> {
            resetPasswordAction(formData)
            .then((data)=> {
                console.log(data);
                if(data.success) {
                    setSuccess(data.success)
                }
                if(data.error) {
                    setError(data.error)
                }
            })
        })

    };


    return (
        <div className=" bg-white dark:bg-stone-950 w-[450px] p-4 rounded-md shadow-md">
            <AuthHeader text='reset password' />
            <form ref={resetForm} action={reset}>
                <AuthInput 
                    type='email' 
                    name='email'
                    Icon={MdOutlineMail}
                    isLoading={isLoading}
                    />

                   <ErrorSucces error={error} success={success} />
                    {
                        success ? null :
                        <ButtonWithIcon 
                            text='send' 
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


export default ResetPassword;