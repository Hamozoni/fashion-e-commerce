import { NextResponse } from "next/server";
import { db } from "../../../../lip/db";


export const GET = async (req)=> {

    const {searchParams} = new URL(req.url);
    const category = searchParams.get('category');
    const page = searchParams.get('page');

    const take = 7;


    try{
        const data = await db.product.findMany({
            take : take,
            skip: (take * page) - take,
            where: {category},
            include: {
                images: true,
                colors: true,
                sizes: true
            }
        });

        return NextResponse.json(data,{status: 200});
    }catch (error) {
        return NextResponse.json('opps! something went wrong',{status: 500});
    }


} 