"use client";
import {useCurrentUser} from "../../../../hooks/useCurrentUser";

function UserField({name}) {
    const user = useCurrentUser()
  return (
    <div className="">
        <h3>{name}: </h3>
        <div className="">
            {
                name === "address" ? 
                <address>
                    {user?.address?.formatedAddress}
                </address>
                :
                <h5>{user[name]}</h5>
            }
        </div>
    </div>
  )
}

export default UserField