"use client";
import { useContext, useTransition } from "react";
// icons
import { CiLogout } from "react-icons/ci";
// loader
import { SyncLoader } from "react-spinners";
// next auth session
import { useSession } from "next-auth/react";
// server actions
import { signOutAction } from "../../actions/auth/signOut";
// overlay model
import {Overlay} from "../models/overlay";
// app context
import { AppContext } from "../../app/contextProvider";

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
            <>
              <Overlay onClick={()=> ''} />
              <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center z-50">
                  <SyncLoader size={22} color="#166534" />
              </div>
            </>
        }
    </div>
  )
};