import { NextResponse } from "next/server";
import { db } from "../../../lip/db";


export async function GET(req) {

    const {searchParams} = new URL(req.url);

    const query = searchParams?.get('query');

    try{

        const data = await db.product.findMany({
            where: {
                name: {
                    contains: query
                }
            },
            include: {
                images: true,
                sizes: true,
                colors: true
            }
        });

        console.log(data)
        return NextResponse.json(data,{status: 200})
    }
    catch (error){
        console.log(error);

        return NextResponse.json(error,{satatus: 404})
    }



}