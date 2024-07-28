import Stripe from "stripe";
import {db} from '../../../lip/db';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function POST (req) {

}