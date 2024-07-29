import Stripe from "stripe";
import {db} from '../../../../lip/db';
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

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

        JSON.parse(products);

        console.log(            paymentId,
            products,
            deliveryFree, 
            totalProductsQuantity,
            userId,
            totalPaidInCent);

            return NextResponse.json({order: "done"},{status: 200});

        // const {id,status} = await stripe.paymentIntents.retrieve(paymentId);
        // status.toUpperCase();
        // const order = await db.order.create({
        //     data: {
        //         paymentId: id,
        //         deliveryFree,
        //         userId,
        //         totalPaidInCent,
        //         totalProductsQuantity,
        //         products : {
        //             create : products
        //         },
        //         payment : {
        //             create : {
        //                 id,
        //                 amountInCent: totalPaidInCent,
        //                 status,
        //                 userId
        //             }
        //         }

        //     }
        // });


        // return NextResponse.json(order,{status: 200});

    }
    catch (error) {

        console.log(error)
        return NextResponse.json("something went wrong",{status: 500});
    }
}