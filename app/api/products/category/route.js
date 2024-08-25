import { NextResponse } from "next/server";
import { db } from "@/lip/db";


export const GET = async (req)=> {

    const {searchParams} = new URL(req.url);
    const category = searchParams.get('category');
    const page = searchParams.get('page');

    const take = 7;
    const skip = (take * (+page || 1)) - take;


    try{

        if(!category) {
            return NextResponse.json("category param is requared");
        }
        const products = await db.product.findMany({
            take,
            skip,
            where: {category},
            include: {
                images: true,
                colors: true,
                sizes: true
            }
        });

        const count = db.product.count({
            where: {category}
        })

        return NextResponse.json({products,count},{status: 200});
    }catch (error) {
        return NextResponse.json('opps! something went wrong',{status: 500});
    }
    finally {
        await db.$disconnect()
    }


} 