"use client";
import {useCurrentUser} from "../../../../hooks/useCurrentUser";

import { IoMdPerson,IoMdCard} from "react-icons/io";
import { CiCreditCard2 } from "react-icons/ci";
import { MdCalendarMonth } from "react-icons/md";
import { ButtonWithIcon } from "../../../../components/buttons";
import { IoShieldCheckmark } from "react-icons/io5";

import { AuthInput } from "../../../auth/_components/authInput";
import  {CartDetails}  from "../../../cart/_components/cartDetails";
import { CartFooter } from "../../../cart/_components/CartSummary";
import {UserField} from "./userField"

function Payment() {

    const user = useCurrentUser()


  return (
    <div className="flex-1 lg:flex-2 bg-white p-3 rounded-md shadow-md">
        <header>
            <div className="">
                <UserField name='name'/>
                <UserField name='email'/>
                <UserField name='address'/>
            </div>
            <h5 className="text-green-900 font-bold text-xl mb-3 capitalize">card details:</h5>
        </header>
        <form action="">
                <AuthInput 
                    type='text'
                    name='name on card'
                    Icon={IoMdPerson}
                    isLoading={false}
                    error={null}
                    />

                <AuthInput 
                type='number'
                name='card number'
                Icon={CiCreditCard2}
                isLoading={false}
                error={null}
                />
            <div className="flex items-center gap-3">
                <AuthInput 
                type='month'
                name='expire date'
                Icon={MdCalendarMonth}
                isLoading={false}
                error={null}
                />
             <AuthInput 
                type='number'
                name='cvv'
                Icon={IoMdCard}
                isLoading={false}
                error={null}
                />
            </div>
            <CartDetails />
            <ButtonWithIcon text='pay now' Icon={IoShieldCheckmark} type='primary' disabled={false} />
        </form>
        <hr className="py-3"/>
        <CartFooter />
    </div>
  )
}

export default Payment