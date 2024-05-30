import {db} from '../../../../lip/db'

export async function GET (req,context) {


   const {section} = context.params;

   const query = await req.nextUrl.searchParams.get("sub");

   console.log(section,query)

   const products = await db.product.findMany({where: {
     category : section,
     subCategory: query
   },
   include: {
      images: true,
      }
   })
   console.log(products)

    return new Response(JSON.stringify(products))

}