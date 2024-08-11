import { NextResponse } from "next/server";
import {addingOfferSchema} from "../../../../validationSchemas/newProductSchemas";
import { db } from "../../../../lip/db";


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
        console.log(validate.success)
        
        
        
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
}