
import { NextResponse } from 'next/server';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST (req) {

    try {
        const formData = await req.formData();

        const amount = formData.get('amount')


        console.log(amount)

        const paymentIntent = await stripe.paymentIntents.create({
            amount:amount,
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
    }
    finally {
        await db.$disconnect()
    }
};