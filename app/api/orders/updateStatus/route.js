import { NextResponse } from "next/server";
import {db} from "../../../../lip/db" ;

export async function PUT (req) {

    const data = await req.body
    
    console.log(req.body);

    return NextResponse.json(data,{status: 200})

    // try {


    //     const updatedOrder = await db.customerOrder.update({
    //         where: {clientSecret},
    //         data : {
    //             status: status
    //         }
    //     });

    //     return NextResponse.json(updatedOrder,{status: 200})

    // }
    // catch (error) {
    //     return NextResponse.json({data: 'something went wrong'},{status: 500})
    // };
}