
import { NextResponse } from 'next/server';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST (req) {

    try {
        const {amount} = await req.json();
        console.log(amount)

        const paymentIntent = await stripe.paymentIntents.create({
            amount:45222,
            currency: 'sar',
            automatic_payment_methods: {
                enabled: true
            }
        });

        console.log(paymentIntent)

        return NextResponse.json({clientSecret:paymentIntent.client_secret},{status: 200})

    }
    catch (error) {
        console.log(error)
        return NextResponse.json({error},{status: 500});
    };
};