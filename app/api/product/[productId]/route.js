import {db} from '../../../../lip/db'

export async function GET (_reg,context) {

    const {productId} = context.params

    const data  = await db.product.findMany({
        where: {
            id: productId
        },
        include: {
            sizes: true,
            images:true ,
            specifications: true
            
        }
    })

    return new Response(JSON.stringify(data))

}