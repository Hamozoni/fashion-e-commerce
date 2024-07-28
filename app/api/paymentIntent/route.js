
import { NextResponse } from 'next/server';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST (req) {

    try {
        const {amount} = await req.json();

        const paymentIntent = await stripe.paymentIntent.create({
            amount,
            currency: 'sar',
            automatic_payment_motheds: {
                enabled: true
            }
        });

        return NextResponse.json({clientSecret:paymentIntent.client_secret},{status: 200})

    }
    catch (error) {
        return NextResponse.json({error},{status: 500});
    };
};