"use client";
import { useContext, useTransition } from "react";
// icons
import { CiLogout } from "react-icons/ci";
// next auth session
import { useSession } from "next-auth/react";
// server actions
import { signOutAction } from "../../actions/auth/signOut";
// app context
import { Loading } from "../models/loading";

export function SignOut() {

    const [isLoading,startTranation] = useTransition();
    const {update} = useSession()

     const signOut = ()=> {

        startTranation(()=> {
             signOutAction()
             .then(()=> {
                update();
             })
        });

    };  

  return (
    <div>
         <button className="flex items-center gap-2" onClick={signOut}>
            <CiLogout  size={22}/> sign out
        </button>
        {
            isLoading &&
            <Loading />
        }
    </div>
  )
};