import { NextResponse } from "next/server";
import { db } from "@/lip/db";


export async function GET(req) {

    const {searchParams} = new URL(req.url);

    const query = searchParams?.get('query');
    const page = searchParams?.get('page');
    const take = 10;
    const skip = (take * (+page || 1)) - take;

    const where = {
        OR: [
            { 
                name: {
                 contains: query
                }
            },
            {
                describtion: {
                    contains: query
                   }

            },
            {
                category: {
                    contains: query
                   }

            },
            {
                subcategory: {
                    contains: query
                   }

            },
            {
                brand: {
                    contains: query
                   }

            },
            {
                colorName: {
                    contains: query
                   }

            },
            {
                size: {
                    contains: query
                   }

            }

        ]
    }

    try{

        if(!query) {
            return NextResponse.json("query param is requared");
        }

        const products = await db.product.findMany({
            where,
            include: {
                images: true,
                sizes: true,
                colors: true
            },
            take,
            skip
        });

        const count = await db.product.count({where})
        return NextResponse.json({products,count},{status: 200})
    }
    catch (error){
        
        return NextResponse.json(error,{satatus: 404})
    }



}