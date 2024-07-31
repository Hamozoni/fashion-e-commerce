
import { NextResponse } from "next/server";
export async function GET (req) {

    const {searchParams} = new URL(req.url);

    const userId = searchParams.get('userId');

    console.log('orders user id',userId)

    return NextResponse.json('deeeeeeeeeeeeeeeeeeeeeeeeeeee',{status:200})



}