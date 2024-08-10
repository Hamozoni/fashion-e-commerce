import { NextResponse } from "next/server";
import {addingOfferSchema} from "../../../../validationSchemas/newProductSchemas";
import { db } from "../../../../lip/db";


export async function PUT (req) {

    try{

        const {seachParams} = new URL(req.url);
        const offerPrice = seachParams.get('offerPrice');
        const expiresDate = seachParams.get('expiresAt');
        const id = seachParams.get('id');
    
        const data = {
            offerPrice: +offerPrice,
            expiresDate: new Date(expiresDate)
        };


    const validate = addingOfferSchema.safeParse(data);

    if(validate.success) {
         const newOffer = await db.productColors.update({
            where: {id},
            data: {
                offerPriceInHalala: +offerPrice,
                offerExpiresAt: new Date(expiresDate).toISOString()
            }

         })
         
        return NextResponse.json(newOffer,{status: 200});

    }else {
        return NextResponse.json(JSON.parse(validate.error),{status: 500})
    }
      

    }
    catch(error) {

    }
}