import {prisma} from '../../_lip/db'

export async function GET (_reg) {

    const data  = await prisma.product.findMany({
        include: {
            sizes: true,
            images:true ,
            specifications: true
            
        }
    })
    console.log("results",data)

    return new Response(JSON.stringify(data))

}