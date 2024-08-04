import { NextResponse } from "next/server";
import {db} from "../../../../lip/db" ;


export async function PUT (req) {

    const {searchParams}= new URL(req.url);

    const status = searchParams.get('status');
    const clientSecret = searchParams.get('clientSecret');

    try {


        const updatedOrder = await db.customerOrder.update({
            where: {paymentClientSecret:clientSecret},
            data : {
                status: status
            }
        });
        console.log(updatedOrder)

        return NextResponse.json(updatedOrder,{status: 200})

    }
    catch (error) {
        return NextResponse.json('something went wrong',{status: 500})
    };
}