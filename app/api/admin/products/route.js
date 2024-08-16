
import {db} from "@/lip/db";
import { NextResponse } from "next/server";

export async function GET (req){

    const {searchParams} = new URL(req.url);

    const category = searchParams.get('category');
    const subcategory = searchParams.get('subcategory');
    const page = searchParams.get('page') || 1;

    const take = 10;

    const skip = (take * +page) - take;

    const where = subcategory === 'all' ? {category} : {AND : [{category},{subcategory}]};


    try{
        if(category === 'all') {

            const products = await db.product.findMany({
                take,
                skip,
                include : {
                    sizes: true,
                    images: true,
                    colors: true
                }
            });

            const count = await db.product.count();

            const data = {
                count,
                products
            }

            return NextResponse.json(data,{status: 200});

        }else {
                const products = await db.product.findMany({
                    where,
                    include : {
                        sizes: true,
                        images: true,
                        colors: true
                    },
                    take,
                    skip
                });
    
                const count = await db.product.count({where});

                const data = {
                    count,
                    products
                }
    
                return NextResponse.json(data,{status: 200});
        }

    }
    catch (error) {
        console.log(error)
        return NextResponse.json(error,{status: 500});
    }


}