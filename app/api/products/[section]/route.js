import {prisma} from '../../../_lip/db'

export async function GET (req,context) {


   const {section} = context.params;
   const guery = await req.nextUrl.searchParams.get("sub");

   const products = await prisma.product.findMany({where: {
     category : section,
     subCategory: guery
   },
   include: {
    images: true,
   }
})
   console.log(products)

    return new Response(JSON.stringify(products))

}