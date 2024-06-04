"use client";

import { useRef, useTransition } from "react";
import { AuthInput } from "../_components/authInput";

import { MdOutlineMail } from "react-icons/md";
import {resetPasswordAction} from "../../../actions/resetPassword";
import { SubmitBtn } from "../_components/submitBtn";
import AuthHeader from "../_components/authHeader";

const ResetPassword = ()=> {

    const [isLoading,startTranation] = useTransition();
    const resetForm = useRef()

    const reset = ()=> {

        const formData = new FormData(resetForm.current);

        startTranation(()=> {
            resetPasswordAction(formData)
        })

    };


    return (
        <div className=" bg-white w-[450px] p-4 rounded-md shadow-md">
            <AuthHeader text='reset password' />
            <form ref={resetForm} action={reset}>
                <AuthInput 
                    key='' 
                    type='email' 
                    name='email'
                    Icon={MdOutlineMail}
                    isLoading={isLoading}
                    />

                    <SubmitBtn isLoading={isLoading} text='submit' />

            </form>
        </div>
    )
};


export default ResetPassword;