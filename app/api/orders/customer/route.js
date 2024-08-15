
import { NextResponse } from "next/server";
import { db } from "@/lip/db";
import { findUserAddressByEmail } from "@/lip/user";

export async function GET (req) {

    try{
        const {searchParams} = new URL(req.url);

        const userId = searchParams.get('userId');
        const status = searchParams.get('status') ?? 'all';

        const where =  status !== "all"  ? {
            AND : [
                {
                   status: status.toUpperCase()
                },
                {
                    userId
                }
            ]
        }: {
            userId
        }

        console.log('order status',where)


        const orders = await db.customerOrder.findMany({
            where,
            include : {
                products: true, 
                customer : {
                    select : {
                        email: true
                    }
                }
            }
        });

        const count = await db.customerOrder.count({where})

        let address = '';

        if(orders?.length > 0) {
            const {customer} = orders[0]
    
            address = await findUserAddressByEmail(customer?.email);
        }


        return NextResponse.json({orders,address,count},{status:200})
    

    }
    catch (error){

        console.log(error)

        return NextResponse.json(error,{status: 500})
    };

};