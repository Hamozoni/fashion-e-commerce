"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { ScaleLoader } from "react-spinners";
import {verificationAction} from "../../../actions/verification"
import { ErrorSucces } from "./errorSucces";

export function VerificationForm() {

    const [error,setError] = useState(null);
    const [success,setSuccess] = useState(null);
    const [isLoading,startTransition] = useTransition();

    const token = useSearchParams()

    useEffect(()=> {

        setError(null);
        setSuccess(null);

        if(!token.get("token")) {
            setError("no token");
            return;
        }

        startTransition(async()=> {
            verificationAction(token.get("token"))
            .then((data)=>{
                setError(data.error);
                setSuccess(data.success)

            })
        })

    },[token]);


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
