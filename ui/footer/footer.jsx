import Link from "next/link"
// components
import {FooterCategories} from "./components/footerCatgories";
import {FooterAboutWebate} from "./components/footerAboutWesite";
import {DownloadApps} from "./components/downloadApps";
import {SubscribeByEmail} from "./components/subscribeByEmail";

export const Footer = ()=> {
    return (
        <footer className="bg-teal-950 dark:bg-stone-900 border-b-8 border-teal-200 mt-4">
            <div className="p-3 lg:px-8">
               <div className="md:flex gap-5 xl:gap-10 border-b border-teal-900 pb-5 mb-5">
                    <div className="">
                        <SubscribeByEmail />
                        <DownloadApps />
                    </div>
                    <div className="lg:flex gap-5 xl:gap-10">
                        <FooterCategories />
                        <FooterAboutWebate />
                    </div>
               </div>
               <div className="flex items-center gap-5 pb-3">
                    <Link className=" text-teal-50 capitalize text-lg lg:text-3xl font-extrabold" href='/'
                        >system
                    </Link> 
                    <div className="text-teal-200">
                        <p>&copy;{new Date()?.getFullYear()} mohamed yahia hamozony</p>
                    </div>
               </div>
            </div>
        </footer>
    )
}