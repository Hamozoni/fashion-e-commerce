"use server";

import {db} from '../../lip/db';

export const productsByCategoryAction = async (category,subcategory)=> {

    console.log(category,subcategory)  
    try{
        const products = await db.product.findMany({where: {
            category,
            subcategory,
          },
          include: {
             images: true,
             sizes: true,
             colors: true
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