import Link from "next/link"
// components
import {FooterCategories} from "./components/footerCatgories";
import {FooterAboutWebate} from "./components/footerAboutWesite";
import {DownloadApps} from "./components/downloadApps"

export const Footer = ()=> {
    return (
        <footer className="bg-teal-950">
            <div className="p-3 lg:px-8">
               <div className="flex gap-10">
                    <FooterCategories />
                    <FooterAboutWebate />
                    <DownloadApps />
               </div>
                <Link className=" text-teal-50 capitalize text-lg lg:text-3xl font-extrabold" href='/'
                  >system
               </Link> 
            </div>
        </footer>
    )
}