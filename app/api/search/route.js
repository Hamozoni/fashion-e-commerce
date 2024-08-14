import { NextResponse } from "next/server";
import { db } from "@/lip/db";


export async function GET(req) {

    const {searchParams} = new URL(req.url);

    const query = searchParams?.get('query');
    const page = searchParams?.get('page');
    const take = 10;
    const skip = (take * (+page || 1)) - take;

    try{

        if(!query) {
            return NextResponse.json("query param is requared");
        }

        const products = await db.product.findMany({
            where: {
                name: {
                    contains: query
                }
            },
            include: {
                images: true,
                sizes: true,
                colors: true
            },
            take,
            skip
        });

        const count = await db.product.count({
            where: {
                name: {
                    contains: query
                }
            }
        })
        return NextResponse.json({products,count},{status: 200})
    }
    catch (error){
        
        return NextResponse.json(error,{satatus: 404})
    }



}