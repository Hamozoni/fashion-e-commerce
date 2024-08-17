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
            include: {
                orders:{
                    select: {
                        id: true,
                        totalPaidInCent: true,
                        status: true,
                        totalProductsQuantity: true,
                    }
                },
            },
            select: {
                name: true,
                email: true,
                id: true,
                image: true,
                _sum: {
                    orders: {
                        select: {
                            totalPaidInCent: true,
                        }
                    }
                },
                _count: {
                    select:{ 
                        orders: true
                    }
                },
                _avg: {
                    select:{ 
                        reviews:{
                            rating: true
                        }
                    }
                }

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
        console.log(error);
        return NextResponse.json('opps! something went wrong',{status: 500});
    }

}