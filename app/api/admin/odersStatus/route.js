import {db} from "../../../../lip/db";
import { NextResponse } from "next/server";

export async function GET (req) {
    const {searchParams} = new URL(req.url);

    const date = searchParams.get('date');


    try{
        const completedOrders = await db.customerOrder.count({
            where : {
            status: 'COMPLETED',
            createdAt : {
                    gte:date
                }
            }
        });
        const pendingOrders = await db.customerOrder.count({
            where : {
                status: 'PENDING',
                createdAt : {
                    gte:date
                } 
            }
        });
        const canceledOrders = await db.customerOrder.count({
            where : {
                status: 'CANCELLED',
                createdAt : {
                    gte:date
                }
            }
        });
        const processingOrders = await db.customerOrder.count({
            where : {
                status: 'PROCESSING',
                createdAt : {
                    gte:date
                }
            }
        });

        const data = {
            completedOrders,
            pendingOrders,
            canceledOrders,
            processingOrders,
        }

        return NextResponse.json(data,{status: 200})

    }
    catch (error) {
        console.log(error);
        return NextResponse.json(error,{status: 500})
    }


}