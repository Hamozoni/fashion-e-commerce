
import {db} from '../../../../lip/db';
import { NextResponse } from "next/server";


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
            totalPaidInCent
        } = Object.fromEntries(formData.entries());

        const findOrder = await db.customerOrder.findUnique({
            where: {
                paymentClientSecret: clientSecret
            }
        });

        if(!!findOrder) {
            return NextResponse.json({order:findOrder},{status: 200});
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

        const user = await db.user.findFirst({where : {id: userId},include : {address: true}});

        const {deliveryFree : de ,totalPaidInCent: tot} = order;

        const { email,address} = user;
        
        await ordersEmail(email,address,{deliveryFree : de,totalPaidInCent: tot})


        return NextResponse.json(order,{status: 200});

    }
    catch (error) {

        console.log(error)
        return NextResponse.json("something went wrong",{status: 500});
    }
}