import { NextResponse } from "next/server";
import {addingOfferSchema} from "../../../../validationSchemas/newProductSchemas";
import { db } from "../../../../lip/db";


export async function PUT (req) {

    try{
        const formData = await req.formData();
        const offerPrice = formData.get('offerPrice');
        const expiresDate = formData.get('expiresDate');
    
        const data = {
            offerPrice: +offerPrice,
            expiresDate: new Date(expiresDate)
        };


    const validate = addingOfferSchema.safeParse(data);

    if(validate.success) {
         const newOffer = await db.productColors.update({
            where: {id}

         })
         
        return NextResponse.json(data,{status: 200});

    }else {
        return NextResponse.json(JSON.parse(validate.error),{status: 500})
    }
      

    }
    catch(error) {

    }
}