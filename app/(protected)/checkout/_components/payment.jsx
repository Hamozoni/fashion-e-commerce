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
        </form>
    </div>
  )
}

export default Payment