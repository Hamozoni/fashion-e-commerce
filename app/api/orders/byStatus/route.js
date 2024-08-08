import { NextResponse } from "next/server";
import { db } from "../../../../lip/db";

export async function GET (req) {

    try{
        const {searchParams} = new URL(req.url);

        const status = searchParams.get('status');
        const page = searchParams.get('page');
        const take = 10

        const orders = await db.customerOrder.findMany({
            where : {
                status
            },
            orderBy: {
                createdAt: 'desc'
            },
            take,
            skip: ( take * +page) - take,
            include : {
                products: true, 
                customer : {
                    select : {
                        email: true,
                        name : true,
                        image: true
                    }
                }
            }
        });

        const orderNumber = await db.customerOrder.count({
            where : {
                status
            },
        });

        const data = {
            orders,
            orderNumber
        }

        return NextResponse.json(data,{status:200})
    

    }
    catch (error){

        return NextResponse.json(error,{status: 500})
    };

};