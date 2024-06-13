"use client";

import { useRef, useState, useTransition } from "react";
import { AuthInput } from "../_components/authInput";

import { MdOutlineMail } from "react-icons/md";
import {resetPasswordAction} from "../../../actions/auth/resetPassword";
import { SubmitBtn } from "../_components/submitBtn";
import AuthHeader from "../_components/authHeader";
import { ErrorSucces } from "../_components/errorSucces";

const ResetPassword = ()=> {

    const [isLoading,startTranation] = useTransition();
    const [error,setError] = useState(null);
    const [success,setSuccess] = useState(null);
    const resetForm = useRef()

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
        <div className=" bg-white w-[450px] p-4 rounded-md shadow-md">
            <AuthHeader text='reset password' />
            <form ref={resetForm} action={reset}>
                <AuthInput 
                    type='email' 
                    name='email'
                    Icon={MdOutlineMail}
                    isLoading={isLoading}
                    />
                    <ErrorSucces error={error} success={success} />

                    <SubmitBtn isLoading={isLoading} text='submit' />

            </form>
        </div>
    )
};


export default ResetPassword;