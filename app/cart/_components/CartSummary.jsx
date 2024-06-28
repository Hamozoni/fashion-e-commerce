"use client";

import { useAppSelector } from "../../../store/store";
import getCurrency from "../../../lip/getCurrency";
import { MdOutlineLocalShipping } from "react-icons/md";

import madaLogo from "../../../public/paymentLogos/logo-mada.webp"
import visaLogo from "../../../public/paymentLogos/logo-visa.webp"
import masterCLogo from "../../../public/paymentLogos/logo-mc.webp"
import paypalLogo from "../../../public/paymentLogos/logo-paypal.webp"
import applePayLogo from "../../../public/paymentLogos/logo-applepay.webp"
import Image from "next/image";
import Link from "next/link";


function CartSummary() {

    const totalPrice = useAppSelector(state=> state.cart.totalPaid)
    const subtotal = useAppSelector(state=> state.cart.totalQuantity)

    const deliveryFree = useAppSelector(state=> state.cart.deliveryFree)

    const paymentLogos = [madaLogo,visaLogo,masterCLogo,applePayLogo,paypalLogo];

    const payment = paymentLogos?.map((img)=> (
         <li key={img}>
            <Image  src={img} width={50} height={50} alt="payment"/>
        </li>
    ));

    const className = {
        section : 'border border-gray-50 mb-3 p-3 rounded-md shadow-md',
        parts: 'flex items-center justify-between py-3 border-b border-gray-50',
        checkoutBtn: 'min-w-full block text-center rounded-md py-2 bg-green-900 uppercase text-green-50 hover:bg-green-800'
    }


  return (
    <div className="w-full p-3 lg:p-0 sticky top-[80px] right-0">
        <header className={`${className.section} bg-green-50`}>
            <div className="flex items-center gap-2 max-w-fit mx-auto">
                <MdOutlineLocalShipping size={22}/>
                <h4 className="uppercase text-green-900">free shipping</h4>
                <p className="text-sm text-green-800">on orders over <strong > SAR 150 </strong></p>
            </div>
        </header>
        <div className={className.section}>
            <div className={className.parts}>
                <h5>{`subtotal (${subtotal} items):`}</h5>
                <h5> {getCurrency(totalPrice)} </h5>
            </div>
            <div className={className.parts}>
                <h5>shipping fee</h5>
                <h5> {deliveryFree > 0 ? getCurrency(deliveryFree): "free"} </h5>
            </div>
            <div className={className.parts}>
                <h5>total: </h5>
                <h5> {getCurrency(totalPrice + deliveryFree)} </h5>
            </div>
            <Link href='/checkout' className={className.checkoutBtn}>
                checkout pay {getCurrency(totalPrice + deliveryFree)}
            </Link>
        </div>

        <footer className={className.section}>
            <ul className="flex items-center gap-2 flex-wrap justify-center">
                {payment}
            </ul>
        </footer>
    </div>
  )
}

export default CartSummary