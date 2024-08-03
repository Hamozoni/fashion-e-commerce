import { NextResponse } from "next/server";
import { db } from "../../../../../lip/db";
import { findUserAddressByEmail } from "../../../../../lip/user";

export async function GET (req) {

    try{
        const {searchParams} = new URL(req.url);

        const status = searchParams.get('status');

        const orders = await db.customerOrder.findMany({
            where : {
                status
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

        const {customer} = orders[0]

        const address = await findUserAddressByEmail(customer?.email);

        return NextResponse.json({orders,address},{status:200})
    

    }
    catch (error){

        return NextResponse.json(error,{status: 500})
    };

};