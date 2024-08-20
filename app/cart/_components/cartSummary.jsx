
import Image from "next/image";
import Link from "next/link";
//payments logos images
import madaLogo from "@/public/paymentLogos/logo-mada.webp";
import visaLogo from "@/public/paymentLogos/logo-visa.webp";
import masterCLogo from "@/public/paymentLogos/logo-mc.webp";
import paypalLogo from "@/public/paymentLogos/logo-paypal.webp";
import applePayLogo from "@/public/paymentLogos/logo-applepay.webp";
// components
import { ButtonWithIcon } from "@/ui/buttons/buttons";
// icons
import { MdOutlineLocalShipping } from "react-icons/md";
import {CartDetails} from "./cartDetails"
import { IoBagCheck } from "react-icons/io5";
// tailwind class
const className = {
    section : 'border border-gray-50 dark:border-stone-800 mb-3 p-3 rounded-md shadow-md',
    parts: 'flex items-center justify-between py-3 border-b border-gray-50 dark:border-stone-800',
}

export const CartFooter = ()=> {
    const paymentLogos = [madaLogo,visaLogo,masterCLogo,applePayLogo,paypalLogo];

    const payment = paymentLogos?.map((img)=> (
         <li key={img}>
            <Image  src={img} width={50} height={50} alt="payment"/>
        </li>
    ));

    return (
        <footer className={className.section}>
            <ul className="flex items-center gap-2 flex-wrap justify-center">
                {payment}
            </ul>
        </footer>
    )
}


export const CartSummary = ()=> {


  return (
    <div className="w-full p-3 lg:p-0 sticky top-[80px] right-0">
        <header className={`${className.section} bg-green-50 dark:bg-stone-900`}>
            <div className="flex items-center gap-2 max-w-fit mx-auto">
                <MdOutlineLocalShipping className="text-teal-900 dark:text-teal-100" size={22}/>
                <h4 className="uppercase text-teal-950 dark:text-teal-50">free shipping</h4>
                <p className="text-sm text-teal-900 dark:text-teal-100">on orders over <strong > SAR 150 </strong></p>
            </div>
        </header>
        <CartDetails />
        <CartFooter />
        <hr className="my-4 text-teal-100 dark:text-stone-800"/>
        <Link href='/checkout'>
            <ButtonWithIcon 
                text='check out' 
                Icon={IoBagCheck}
                type='save'
                onClick={()=> ''}
            />
        </Link>
    </div>
  )
};
