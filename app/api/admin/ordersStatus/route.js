import {db} from "../../../../lip/db";
import { NextResponse } from "next/server";

export async function GET (req) {
    const {searchParams} = new URL(req.url);

    const date = new Date(searchParams.get('date')).toISOString()


    try{
        const completedOrders = await db.customerOrder.count({
            where : {
                AND : [
                    {
                        createdAt : {
                            gte:date,
                        }
                     },
                    {  
                        status: 'COMPLETED'
                    }
                ]
            }

        });
        const pendingOrders = await db.customerOrder.count({
            where : {
                AND : [
                    {
                        createdAt : {
                            gte:date,
                        }
                     },
                    {  
                        status: 'PENDING',
                    }
                ]
            }
        });
        const canceledOrders = await db.customerOrder.count({
            where : {
                AND : [
                    {
                        createdAt : {
                            gte:date,
                        }
                     },
                    {  
                        status: 'CANCELLED'
                    }
                ]
            }
        });
        const processingOrders = await db.customerOrder.count({
            where : {
                AND : [
                    {
                        createdAt : {
                            gte:date,
                        }
                     },
                    {  
                        status: 'PROCESSING'
                    }
                ]
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