"use client";

import { useSession } from "next-auth/react";

export const UseCurrentUser = ()=> {

    const user = useSession()?.data?.user;

    return user;
}