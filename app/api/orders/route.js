
import { NextResponse } from "next/server";
import { db } from "../../../lip/db";

export async function GET (req) {

    try{
        const {searchParams} = new URL(req.url);

        const userId = searchParams.get('userId');

        const orders = await db.customerOrder.findMany({
            where : {
                userId
            },
            include : {
                products: true
            }
        });

    
        return NextResponse.json(orders,{status:200})
    

    }
    catch (error){

        return NextResponse.json(error,{status: 500})
    }





}