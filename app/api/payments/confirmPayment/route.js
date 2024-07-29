import {db} from '../../../../lip/db';
import { NextResponse } from "next/server";


export  async function POST (req) {
    
    try {

        const formData =  await req.formData()
        
        const {
            paymentId,
            products,
            deliveryFree, 
            totalProductsQuantity,
            userId,
            totalPaidInCent
        } = Object.fromEntries(formData.entries());

        const findOrder = await db.order.findFirst({
            where: {
                paymentId
            }
        });

        if(findOrder) {
            return NextResponse.json({order:findOrder},{status: 200});
        }

        const order = await db.order.create({
            data: {
                paymentId,
                deliveryFree,
                userId,
                totalPaidInCent,
                totalProductsQuantity,
                products : {
                    create : JSON.parse(products)
                },
                payment : {
                    create : {
                        id: paymentId,
                        amountInCent: totalPaidInCent,
                        status: "COMPLETED",
                        userId
                    }
                }

            }
        });


        return NextResponse.json(order,{status: 200});

    }
    catch (error) {

        console.log(error)
        return NextResponse.json("something went wrong",{status: 500});
    }
}