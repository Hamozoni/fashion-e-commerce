// import {prisma} from '../../_lip/db'

export async function GET (_reg,context) {


   const {params} = context;

   console.log(context)

    return new Response([{"gh": "jhhh"}])

}