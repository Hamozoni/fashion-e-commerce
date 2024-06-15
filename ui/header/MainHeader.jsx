"use client";

import Link from "next/link";
import HeaderUserBar from "./components/HeaderUserBar";
import Categories from "../../components/Categories";
import SearchBar from "./components/SearchBar";
import { signOutAction } from "../../actions/auth/signOut";
import { useTransition } from "react";
import Overlay from "../../components/Overlay";
import {SyncLoader} from "react-spinners";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";


 function MainHeader () {


    const [isLoading,startTranation] = useTransition();
    const router = useRouter()

    const {update} = useSession()

    const className = {
        flex:  'flex items-center gap-4 relative',
    }

    const signOut = ()=> {

        startTranation(()=> {
             signOutAction()
             .then(()=> {
                update()
                router.push('/auth/login')
             })
        });

    };

  return (
    <header className="sticky top-0 left-0 w-full max-w-full z-50 py-2 px-4 lg:px-8 bg-green-100">
        <div className={`${className.flex} justify-between w-full`}>
            <div className="">
                <Link 
                    href='/' 
                    className='uppercase text-2xl font-extrabold text-lime-700'
                    >
                    system
                </Link>
            </div>
            <section className={`${className.flex} flex-1`}>
                <SearchBar />
                <Categories/>
                <HeaderUserBar />
                <button onClick={signOut}>sign out</button>
            </section>

        {
            isLoading &&
            <>
              <Overlay onClick={()=> ''} />
              <div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center z-50">
                  <SyncLoader size={30} />
              </div>
            </>
        }
        </div>
    </header>
  )
}

export default MainHeader