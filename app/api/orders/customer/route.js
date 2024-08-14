
import { NextResponse } from "next/server";
import { db } from "@/lip/db";
import { findUserAddressByEmail } from "@/lip/user";

export async function GET (req) {

    try{
        const {searchParams} = new URL(req.url);

        const userId = searchParams.get('userId');

        const orders = await db.customerOrder.findMany({
            where : {
                userId
            },
            include : {
                products: true, 
                customer : {
                    select : {
                        email: true
                    }
                }
            }
        });

        let address = '';

        if(orders?.length > 0) {
            const {customer} = orders[0]
    
            address = await findUserAddressByEmail(customer?.email);
        }


        return NextResponse.json({orders,address},{status:200})
    

    }
    catch (error){

        return NextResponse.json(error,{status: 500})
    };

};