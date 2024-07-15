"use client";
import {signIn} from "next-auth/react"
import { SiGithub } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { DEFAULT_LOGIN_REDIRECT } from "../../../routes";
import { useTransition } from "react";
import {PropagateLoader} from "react-spinners";
import Overlay from "../../../components/Overlay";
import { useSearchParams } from "next/navigation";

function AuthSocial({text,link,page}) {

    const callbackUrl = useSearchParams().get("callback");
    const [isLoading,startTranation] = useTransition();

    const OauthSignIn = (provider)=> {
        startTranation(async()=> {
            signIn(provider,{
                callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT
            })
        })
    }

    
    const className = {
        socialBtn : "flex-1 rounded-md border border-gray-50 hover:bg-gray-100 bg-gray-50 hover:shadow-none shadow-md flex items-center justify-center py-2 gap-3"
    }
  return (
    <div className="relative">
        <div className="flex items-center justify-between">
            <button 
                disabled={isLoading}
                onClick={()=> OauthSignIn("github")}
                className={className.socialBtn}
                ><SiGithub size={24}/> {page === 'logIn' ? "login " :"sign up "} with github
            </button>
            <button 
              disabled={isLoading}
              onClick={()=> OauthSignIn("google")}
              className={className.socialBtn}>
                <FcGoogle size={24}/> {page === 'logIn'? "login " :"sign up "} with google
            </button>
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