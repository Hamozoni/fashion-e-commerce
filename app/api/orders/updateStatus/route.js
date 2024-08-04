import { NextResponse } from "next/server";
import {db} from "../../../../lip/db" ;


export async function PUT (req) {

    const {searchParams}= new URL(req.url);

    const status = searchParams.get('status');
    const clientSecret = searchParams.get('clientSecret');



    // const data = JSON.parse(body)
    
    console.log("jhagkbkb bhbkjbkjabk",status,clientSecret);

    return NextResponse.json('kjkhuh',{status: 200})

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