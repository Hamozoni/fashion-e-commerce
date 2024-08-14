
import {db} from "@/lip/db";
import { NextResponse } from "next/server";

export async function GET (req){

    const {searchParams} = new URL(req.url);

    const category = searchParams.get('category');
    const sub = searchParams.get('sub');
    const page = searchParams.get('page') || 1;

    const take = 10;

    const skip = (take * +page) - take


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
            if(sub === 'all') {
                const products = await db.product.findMany({
                    where : {
                        category,
                    },
                    include : {
                        sizes: true,
                        images: true,
                        colors: true
                    },
                    take,
                    skip
                });
    
                const count = await db.product.count({
                    where : {
                        category,
                    },
                });

                const data = {
                    count,
                    products
                }
    
                return NextResponse.json(data,{status: 200});
            }else {
                const products = await db.product.findMany({
                    where : {
                        AND:[
                            {
                                category,
                            },
                            {
                                subcategory: sub,

                            }
                            ]
                        },
                        include : {
                            sizes: true,
                            images: true,
                            colors: true
                        },
                        take,
                        skip
                   }
            );
    
                const count = await db.product.count({
                    where : {
                        AND:[
                            {
                                category,
                            },
                            {
                                subcategory: sub,

                            }
                            ]
                        },
                });

                const data = {
                    count,
                    products
                }
    
                return NextResponse.json(data,{status: 200});
            }
        }

    }
    catch (error) {
        console.log(error)
        return NextResponse.json(error,{status: 500});
    }


}