import Stripe from "stripe";
import {db} from '../../../lip/db';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function POST (req) {


    
    
    try {
        
        const {
            paymentId,
            products,
            deliveryFree, 
            totalProductsQuantity,
            userId,
            totalPaidInCent
        } = await req.json();

        const paymentIntent = await stripe.paymentIntents.retrieve(paymentId);

        const order = await db.order.create({
            data: {
                
            }
        })

    }
    catch (error) {

    }
}