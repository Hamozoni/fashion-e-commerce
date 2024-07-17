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
                specifications: true,
                colors: true
            }
        })
    
        return {data}

    }catch {
        return {error: "something went wrong"}
    }
    finally {
        await db.$disconnect()
    }


}