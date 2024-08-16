import { NextResponse } from "next/server";
import {addingOfferSchema} from "@/validationSchemas/newProductSchemas";
import { db } from "@/lip/db";


export async function PUT (req) {

    try{

        const {searchParams} = new URL(req.url);
        const offerPrice = searchParams.get('offerPrice');
        const expiresDate = searchParams.get('expiresAt');
        const id = searchParams.get('id');
    
        const newOffer = {
            offerPrice: +offerPrice,
            expiresDate: new Date(expiresDate),
            id
        };

        const validate = addingOfferSchema.safeParse(newOffer);
        
        if(validate.success) {
            const data = await db.productColors.update({
                where: {id},
                data: {
                    offerPriceInHalala: +offerPrice,
                    offerExpiresAt: new Date(expiresDate).toISOString()
                }
                
            })
            
            
            
            return NextResponse.json(data,{status: 200});

    }else {
        return NextResponse.json(JSON.parse(validate.error),{status: 500})
    }
      

    }
    catch(error) {
        console.log(error);

        return NextResponse.json(error,{status:500})
    }
};

export async function GET (req) {

    const {searchParams} = new URL(req.url);
    const category = searchParams.get('category');
    const subcategory = searchParams.get('subcategory');

    const page = searchParams.get('page');

    const take = 10;
    const skip = (take * (+page || 1)) - take;

    const where = subcategory === 'all' ? {

        product : {
            category
        }
    } : {
           AND : [
               {
                product : {
                   category
                }
              },
              {
                product : {
                   subcategory
                }
              },
           ]
    };


    try{

        if(category === 'all' ) {
            
            const offers = await db.productColors.findMany({
                include: {
                    product: true
                },
                take,
                skip
            });
    
            const count = await db.productColors.count()
            return NextResponse.json({offers,count},{status: 200})

        }else {
                const offers = await db.productColors.findMany({
                    where,
                    include: {
                        product: true
                    },
                    take,
                    skip
                });
        
                const count = await db.productColors.count({where})
                return NextResponse.json({offers,count},{status: 200})
        }
    }
    catch (error) {
        console.error(error);

        return NextResponse.json('something went wrong',{status: 500})
    }

}