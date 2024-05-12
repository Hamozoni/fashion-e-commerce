import {prisma} from '../../../_lip/db'

export async function GET (_reg,context) {

    const {productId} = context.params

    const data  = await prisma.product.findMany({
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