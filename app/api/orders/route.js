import { auth } from "../../../auth";

import { NextResponse } from "next/server";
export async function GET (req) {

    const session = await auth()

    console.log('orders token',session.user)

    return NextResponse.json('deeeeeeeeeeeeeeeeeeeeeeeeeeee',{status:200})



}