"use client";
import {useCurrentUser} from "../../../../hooks/useCurrentUser";

function Payment() {

    const user = useCurrentUser()


  return (
    <div>
        <form action="">
            <div className="">
                <h3>name: </h3>
                <div className="">
                    <h5>{user?.name}</h5>
                </div>
            </div>
            <div className="">
                <h3>email: </h3>
                <div className="">
                    <h5>{user?.email}</h5>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Payment