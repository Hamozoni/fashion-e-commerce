"use client"

import { useSession } from "next-auth/react";

const checkoutPage = ()=>  {

    const session =  useSession()
  return (
    <div>{JSON.stringify(session?.data?.user)}</div>
  )
}

export default checkoutPage