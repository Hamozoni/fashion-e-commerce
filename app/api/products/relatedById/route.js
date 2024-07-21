import { NextResponse } from "next/server";
import { db } from "../../../../lip/db";

export const GET = async (req)=> {

    const {searchParams} = new URL(req.url);

    const id = searchParams.get('id');

    try {

        const product = await db.product.findFirst({
            where : {id},
            select : {
                category: true,
                subcategory: true,
            }
        });

        const {category,subcategory} = product;

        const data = await db.product.findMany({
            where: {
                category,
                subcategory
            },
            include: {
                images: true,
                colors : true,
                sizes: true,
            }
        });


        const filteredData = data.filter(e => e.id !== id);

        return NextResponse.json(filteredData,{status: 200});

    }
    catch (error) {
        return NextResponse.json('opps! something went wrong',{status: 500});
    };



}