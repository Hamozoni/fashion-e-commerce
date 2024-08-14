import {db} from "@/lip/db";
import { NextResponse } from "next/server";

export async function GET (req) {
    const {searchParams} = new URL(req.url);

    const date = new Date(searchParams.get('date')).toISOString()


    try{
        const completed = await db.customerOrder.count({
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
        const pending = await db.customerOrder.count({
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
        const canceled = await db.customerOrder.count({
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
        const processing = await db.customerOrder.count({
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
            completed,
            pending,
            canceled,
            processing,
        }

        return NextResponse.json(data,{status: 200})

    }
    catch (error) {
        console.log(error);
        return NextResponse.json(error,{status: 500})
    }


}