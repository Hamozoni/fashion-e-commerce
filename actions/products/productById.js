import {db} from '../../lip/db'

export const productById = async (productId)=> {

    try{
        const data  = await db.product.findFirst({
            where: {
                id: productId
            },
            include: {
                sizes: true,
                images:true ,
                specifications: true
                
            }
        })
    
        return {data}

    }catch(error){
        return {error: error.massege}
    }


}