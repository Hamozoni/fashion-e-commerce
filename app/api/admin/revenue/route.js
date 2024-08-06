import { NextResponse } from "next/server";
import {db} from "../../../../lip/db";

export async function GET(req) {

    const {searchParams} = new URL(req.url);

    const datesJson = searchParams.get('dates');
    const dates = JSON.parse(datesJson);

    let data = []

    try {

        for (let i = 0 ; i < dates?.length;i++){

            const gteISODate = new Date(dates[i]?.date).toISOString();
            let lteISODate = new Date().toISOString();
            if(i !== 0) {
                lteISODate = new Date(dates[i - 1]?.date).toISOString();
            }

            const revenue = await db.ordersPayment.aggregate({
                _sum : {
                    amountInCent: true
                },
                where : {
                    AND : [
                        {
                            createdAt : {
                                gte: gteISODate
                            }
                        },
                        {
                            createdAt : {
                                lte: lteISODate
                            }
                        }
                    ]
                }
            });

            data.push({name :dates[i]?.name,revenue : revenue?._sum?.amountInCent});
        };

        return NextResponse.json(data,{status: 200})

    }
    catch(error) {
        console.log.log(error);
        return NextResponse.json(error,{status: 500})
    }
}