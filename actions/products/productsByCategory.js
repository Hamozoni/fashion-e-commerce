"use server";

import {db} from '../../lip/db';

export const productsByCategoryAction = async (category,subCategory)=> {
    
    try{
        const products = await db.product.findMany({where: {
            category,
            subCategory,
          },
          include: {
             images: true,
             }
          })
           return {data: products}
    }catch(error){

        return {error: error.massege}

    }
    finally {
        await db.$disconnect()
    }

}