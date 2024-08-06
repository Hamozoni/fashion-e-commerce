import { NextResponse } from "next/server";
import {db} from "../../../../../lip/db";

export async function GET () {
    try{

        const allProducts = await db.product.aggregate({
            _sub : {
                sizes : {
                    stackQuantity: true
                }
            }
        });

        const menSection = await db.product.aggregate({
            _sub : {
                sizes : {
                    stackQuantity: true
                }
            },
            where: {
                category: 'men'
            }
        });

        const womenSection = await db.product.aggregate({
            _sub : {
                sizes : {
                    stackQuantity: true
                }
            },
            where: {
                category: 'women'
            }
        });
        const kidsSection = await db.product.aggregate({
            _sub : {
                sizes : {
                    stackQuantity: true
                }
            },
            where: {
                category: 'kids'
            }
        });

        console.log(allProducts,menSection,womenSection,kidsSection)

        const data = [
            {
                name: 'all sections',
                quantity: allProducts
            },
            {
                name: 'men section',
                quantity: menSection
            },
            {
                name: 'men section',
                quantity: womenSection
            },
            {
                name: 'men section',
                quantity: kidsSection
            },

        ]

        return NextResponse.json(data,{status: 200})
    }
    catch (error) {
        console.log(error)
    }
}