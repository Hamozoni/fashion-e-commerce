import Link from "next/link"
// components
import {FooterCategories} from "./components/footerCatgories";
import {FooterAboutWebate} from "./components/footerAboutWesite";
import {DownloadApps} from "./components/downloadApps";
import {SubscribeByEmail} from "./components/subscribeByEmail"
import { CartFooter } from "../../app/cart/_components/CartSummary";

export const Footer = ()=> {
    return (
        <footer className="bg-teal-950">
            <div className="p-3 lg:px-8">
               <div className="flex gap-10 border-b border-teal-700 pb-5 mb-5">
                    <div className="">
                        <DownloadApps />
                        <SubscribeByEmail />
                    </div>
                    <FooterCategories />
                    <FooterAboutWebate />
               </div>
               <div className="flex gap-5">
                <Link className=" text-teal-50 capitalize text-lg lg:text-3xl font-extrabold" href='/'
                    >system
                </Link> 
                <CartFooter />
               </div>
            </div>
        </footer>
    )
}