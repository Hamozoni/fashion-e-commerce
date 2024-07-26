"use client";
import { useContext, useTransition } from "react";
// icons
import { CiLogout } from "react-icons/ci";
// next auth session
import { useSession } from "next-auth/react";
// server actions
import { signOutAction } from "../../actions/auth/signOut";
// app context
import { AppContext } from "../../app/contextProvider";
import { Loading } from "../models/Loading";

export function SignOut() {

    const {setCurrentUser} = useContext(AppContext);
    const [isLoading,startTranation] = useTransition();
    const {update} = useSession()

     const signOut = ()=> {

        startTranation(()=> {
             signOutAction()
             .then(()=> {
                update();
                setCurrentUser(null);
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