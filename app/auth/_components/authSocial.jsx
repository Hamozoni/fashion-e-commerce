"use client";
import {signIn} from "next-auth/react"
import { SiGithub } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { DEFAULT_LOGIN_REDIRECT } from "../../../routes";
import { useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { ButtonWithIcon } from "../../../ui/buttons/buttons";
import { Loading } from "../../../ui/models/Loading";

function AuthSocial({text,link,page}) {

    const callbackUrl = useSearchParams().get("callback");
    const [isLoading,startTranation] = useTransition();

    const OauthSignIn = (provider)=> {
        startTranation(()=> {
            signIn(provider,{
                callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT
            })
        })
    };

  return (
    <div className="relative mt-5">
        <div className="flex items-center justify-between gap-5">
            <ButtonWithIcon 
                text={page === 'logIn' ? "login with github" :"signUp with github"} 
                Icon={SiGithub}
                type='save'
                onClick={()=> OauthSignIn("github")}
                disabled={isLoading}
                />

            <ButtonWithIcon 
                text={page === 'logIn' ? "login with google" :"signUp with google"} 
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
                className="capitalize text-teal-900 dark:text-teal-100 font-medium hover:text-teal-800 dark:hover:text-teal-50 "
                >
                {text}
            </Link>
        </div>
        {
            isLoading && <Loading/>
        }
    </div>
  )
}

export default AuthSocial