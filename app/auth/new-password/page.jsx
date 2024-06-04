"use client";

import { useSearchParams } from "next/navigation";
import AuthHeader from "../_components/authHeader";
import { IoLockClosed } from "react-icons/io5";
import { useRef, useState, useTransition } from "react";
import { ErrorSucces } from "../_components/errorSucces";
import { SubmitBtn } from "../_components/submitBtn";

function newPasswordPage() {

    const token = useSearchParams().get("token");
    const [error,setError] = useState(null);
    const [success,setSuccess] = useState(null);
    const [isLoading,startTranation] = useTransition();
    const newPasswordForm = useRef();

    console.log(token);

    const newPassword = ()=> {
        setError(null);
        setSuccess(null);

        const formData = new FormData(newPasswordForm.current);



        startTranation(()=> {

        })

    }
    
  return (
    <div className=" bg-white w-[450px] p-4 rounded-md shadow-md">
        <AuthHeader text='new password' />
        <form ref={newPasswordForm} action={newPassword}>
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
                <ErrorSucces error={error} success={success} />

                <SubmitBtn isLoading={isLoading} text='send new password' />

        </form>
    </div>
  )
}

export default newPasswordPage