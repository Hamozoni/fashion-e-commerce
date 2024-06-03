"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState, useTransition } from "react";
import { ScaleLoader } from "react-spinners";
import {verificationAction} from "../../../actions/verification"
import { ErrorSucces } from "./errorSucces";

export function VerificationForm() {

    const [error,setError] = useState(null);
    const [success,setSuccess] = useState(null);
    const [isLoading,startTransition] = useTransition();

    const token = useSearchParams()

    const login = useCallback(()=> {
        setError(null);
        setSuccess(null);

        if(!token.get("token")) {
            setError("no token");
            return;
        }

        startTransition(()=> {
            verificationAction(token.get("token"))
            .then((data)=>{
                setError(data.error);
                setSuccess(data.success)

            })
        })
    },[token])
    useEffect(()=> {

        login()

    },[login]);


  return (
    <div className="flex justify-center items-center">
                {
                    isLoading ? 
                    <ScaleLoader color="#333"/>
                    : <ErrorSucces error={error} success={success} /> 
                }
    </div>
  )
}
