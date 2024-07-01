"use client";

import { CiLogout } from "react-icons/ci";

import { SyncLoader } from "react-spinners";

import { signOutAction } from "../actions/auth/signOut";
import { useContext, useTransition } from "react";
import Overlay from "./Overlay";
import { useSession } from "next-auth/react";
import { AppContext } from "../app/contextProvider";

function SignOut() {

    const {setCurrentUser} = useContext(AppContext);
    const [isLoading,startTranation] = useTransition();
    const {update} = useSession()

     const signOut = ()=> {

        startTranation(()=> {
             signOutAction()
             .then(()=> {
                update();
                setCurrentUser(null)
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
            <>
              <Overlay onClick={()=> ''} />
              <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center z-50">
                  <SyncLoader size={22} color="#166534" />
              </div>
            </>
        }
    </div>
  )
}

export default SignOut