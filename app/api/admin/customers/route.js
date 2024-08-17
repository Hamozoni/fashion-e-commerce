import { db } from "@/lip/db";
import { NextResponse } from "next/server";


export async function GET (req){

    const searchParams = new URL(req.url);

    const page = searchParams.get('page') || 1

    const take = 10;
    const skip = (take * +page) - take

    try{

        const customers = await db.user.findMany({
            take,
            skip
        });

        const allCount = await db.user.count();
        const verifiedCount = await db.user.count({
            where :{
                emailVerified : {
                    not: null
                }
            }
        });
        const unverifiedCount = await db.user.count({
            where :{
                emailVerified : null
            }
        });

        return NextResponse.json({customers,allCount,verifiedCount,unverifiedCount},{status: 200})

    }
    catch (error) {
        console.log(error);
        return NextResponse.json('opps! something went wrong',{status: 500});
    }

}