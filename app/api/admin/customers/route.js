import { db } from "@/lip/db";
import { NextResponse } from "next/server";


export async function GET (req){

    const {searchParams} = new URL(req.url);

    const page = searchParams.get('page') || 1

    const take = 10;
    const skip = (take * +page) - take

    try{

        const customers = await db.user.findMany({
            where:{
                role: 'USER'
            },
            take,
            skip,
            select: {
                orders:{
                    select: {
                        id: true,
                        totalPaidInCent: true,
                        status: true,
                        totalProductsQuantity: true,
                    },
                },
                reviews: {
                    select: {
                        rating: true,
                        id: true,
                        rateTitle: true,
                        rateText: true
                    }

                },
                id:true,
                name:true,
                email:true,
                role: true,
                emailVerified:true,
                createdAt: true
            },

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
        const adminCount = await db.user.count({
            where :{
                role : 'ADMIN'
            }
        });

        return NextResponse.json({customers,allCount,verifiedCount,unverifiedCount,adminCount},{status: 200})

    }
    catch (error) {
        return NextResponse.json('opps! something went wrong',{status: 500});
    }
    finally {
        await db.$disconnect()
    }

}