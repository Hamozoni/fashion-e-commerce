import {prisma} from '../../_lip/db'

export async function GET (_reg) {

    const data  = await prisma.product.findMany(
        {include: {images:true,images:true }})
    console.log("results",data)

    return new Response(JSON.stringify(data))

}