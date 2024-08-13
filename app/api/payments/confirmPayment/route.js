
import {db} from '../../../../lip/db';
import { NextResponse } from "next/server";

import {ordersEmail} from "../../../../lip/mail"
export  async function POST (req) {

    try {

        const formData =  await req.formData()
        
        const {
            clientSecret,
            paymentId,
            products,
            deliveryFree, 
            totalProductsQuantity,
            userId,
            totalPaidInCent,
            userImail
        } = Object.fromEntries(formData.entries());

        const findOrder = await db.customerOrder.findUnique({
            where: {
                paymentClientSecret: clientSecret
            }
        });



        if(findOrder) {
            return NextResponse.json(findOrder,{status: 200});
        }

        const order = await db.customerOrder.create({

            data: {
                    deliveryFree: Number(deliveryFree),
                    totalPaidInCent: Number(totalPaidInCent),
                    totalProductsQuantity :Number(totalProductsQuantity),
                    paymentClientSecret: clientSecret,
                    userId,
                    products : {
                        create : JSON.parse(products)
                    
                    },
                    payment: {
                        create:
                            {
                            id: paymentId,
                            amountInCent: Number(totalPaidInCent),
                            status: "COMPLETED",
                            clientSecret:clientSecret,
                            userId,
                        }
                        
                    }
            }
        });

        const address = await db.userAddress.findUnique({where: {email: userImail}})

        await ordersEmail(
           userImail,
           address,
           {
               deliveryFree : order.deliveryFree,
               totalPaidInCent: order.totalPaidInCent,
               orderId: order.id
           });

        return NextResponse.json(order,{status: 200});

    }
    catch (error) {
        console.log(error)
        return NextResponse.json({error:"something went wrong"},{status: 500});
    }
}