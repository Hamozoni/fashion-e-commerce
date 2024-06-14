"use client";
import {useCurrentUser} from "../../../../hooks/useCurrentUser";
import UserField from "./userField"

function Payment() {

    const user = useCurrentUser()


  return (
    <div>
        <form action="">
            <div className="">
                <UserField name='name'/>
                <UserField name='email'/>
                <UserField name='address'/>
            </div>
            <div className="">
                <label htmlFor="">name on card</label>
                <input type="text" placeholder="cardhoder name" />
            </div>
            <div className="">
                <label htmlFor="">card number</label>
                <input type="number" placeholder="card number" />
            </div>
            <div className="">
                <div className="">
                    <label htmlFor="">month</label>
                    <input type='number' placeholder="05"  />
                </div>
                <div className="">
                    <label htmlFor="">year</label>
                    <input type='number' placeholder="28"/>
                </div>
                <div className="">
                    <label htmlFor="">cvv</label>
                    <input type='number' placeholder="cvv"/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Payment