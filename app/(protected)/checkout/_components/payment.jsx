"use client";
import {useCurrentUser} from "../../../../hooks/useCurrentUser";
import { AuthInput } from "../../../auth/_components/authInput";
import UserField from "./userField"

import { IoMdPerson,IoMdCard} from "react-icons/io";
import { CiCreditCard2 } from "react-icons/ci";
import { MdCalendarMonth } from "react-icons/md";
import { ButtonWithIcon } from "../../../../components/buttons";
import { IoShieldCheckmark } from "react-icons/io5";

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
            <h5 className="text-green-950 text-xl mb-3 capitalize">card details:</h5>
        </header>
        <form action="">
            <div className="flex gap-3">
                <div className="flex-2 w-1/3">
                    <AuthInput 
                    type='text'
                    name='name on card'
                    Icon={IoMdPerson}
                    isLoading={false}
                    error={null}
                    />

                </div>
                <div className="flex-1">

                <AuthInput 
                type='number'
                name='card number'
                Icon={CiCreditCard2}
                isLoading={false}
                error={null}
                />
                </div>

            </div>
            <div className="flex items-center gap-3">
                <AuthInput 
                type='number'
                name='month'
                Icon={MdCalendarMonth}
                isLoading={false}
                error={null}
                />
             <AuthInput 
                type='number'
                name='day'
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
            <ButtonWithIcon text='pay now' Icon={IoShieldCheckmark} type='primary' disabled={false} />
        </form>
    </div>
  )
}

export default Payment