"use client";
import {signIn} from "next-auth/react"
import { SiGithub } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useState} from "react";
import { useSearchParams } from "next/navigation";
import { ButtonWithIcon } from "@/ui/buttons/buttons";
import { Loading } from "@/ui/models/loading";

function AuthSocial({text,link,page}) {

    const callbackUrl = useSearchParams().get("callback");
    const [isLoading,setIsLoading] = useState();

    const OauthSignIn = (provider)=> {
        setIsLoading(provider)
            signIn(provider,{
                callbackUrl: callbackUrl || process.env.NEXT_PUBLIC_URL
            })
    };

    const className = {
        link: 'text-teal-950 dark:text-teal-50 hover:scale-110 font-bold text-sm'
    }

  return (
    <div className="relative mt-8 capitalize">
        <div 
            className="flex items-center mb-3 justify-between gap-3 ">
            <Link 
                href={link} 
                className={className.link}
                >
                {text}
            </Link>
            <Link className={className.link} href="/auth/reset-password">
                forgot password?
           </Link>
        </div>
        <div className="flex items-center justify-between gap-3 flex-col">
            <ButtonWithIcon 
                text={page === 'logIn' ? "login with github" :"signUp with github"} 
                Icon={SiGithub}
                type='save'
                onClick={()=> OauthSignIn("github")}
                disabled={isLoading === 'github'}
                />

            <ButtonWithIcon 
                text={page === 'logIn' ? "login with google" :"signUp with google"} 
                Icon={FcGoogle}
                type='save'
                onClick={()=> OauthSignIn("google")}
                disabled={isLoading === 'google'}
                />
        </div>
        {
            isLoading && <Loading/>
        }
    </div>
  )
}

export default AuthSocial