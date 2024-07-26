"use client";
import {signIn} from "next-auth/react"
import { SiGithub } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { DEFAULT_LOGIN_REDIRECT } from "../../../routes";
import { useTransition } from "react";
import {PropagateLoader} from "react-spinners";
import {Overlay }from "../../../ui/models/overlay";
import { useSearchParams } from "next/navigation";
import { ButtonWithIcon } from "../../../ui/buttons/buttons";

function AuthSocial({text,link,page}) {

    const callbackUrl = useSearchParams().get("callback");
    const [isLoading,startTranation] = useTransition();

    const OauthSignIn = (provider)=> {
        startTranation(async()=> {
            signIn(provider,{
                callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT
            })
        })
    };
    
  return (
    <div className="relative">
        <div className="flex items-center justify-between gap-5">
            <ButtonWithIcon 
                text={page === 'logIn' ? "login " :"sign up "} 
                Icon={SiGithub}
                type='save'
                onClick={()=> OauthSignIn("github")}
                disabled={isLoading}
                />

            <ButtonWithIcon 
                text={page === 'logIn' ? "login " :"sign up "} 
                Icon={FcGoogle}
                type='save'
                onClick={()=> OauthSignIn("google")}
                disabled={isLoading}
                />
        </div>
        <div 
            className="text-center p-3 ">
            <Link 
                href={link} 
                className="capitalize text-green-800 font-medium hover:text-green-700"
                >
                {text}
            </Link>
        </div>
        {
            isLoading && <>
              <Overlay onClick={()=>''} />
              <div className="z-50 absolute left-0 top-0 w-full flex justify-center items-center">
                 <PropagateLoader color="#166534" size={22} />
              </div>
            </>
        }
    </div>
  )
}

export default AuthSocial