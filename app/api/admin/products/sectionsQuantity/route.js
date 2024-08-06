import { NextResponse } from "next/server";
import {db} from "../../../../../lip/db";

export async function GET () {
    try{

        const allProducts = await db.productSize.aggregate({
            _sum : {
                stackQuantity: true
            }
        });

        const menSection = await db.productSize.aggregate({
            _sum : {
                 stackQuantity: true
            },
            where: {
                product: {
                    category: 'men'
                }
            }
        });

        const womenSection = await db.productSize.aggregate({
            _sum : {
                stackQuantity: true
           },
           where: {
               product: {
                   category: 'women'
               }
           }
        });
        const kidsSection = await db.productSize.aggregate({
            _sum : {
                stackQuantity: true
           },
           where: {
               product: {
                   category: 'kids'
               }
           }
        });

        const allProductsItems = await db.productSize.count();

        const menSectionItems = await db.productSize.count({
            where: {
                product: {
                    category: 'men'
                }
            }
        });

        const womenSectionItems = await db.productSize.count({
           where: {
               product: {
                   category: 'women'
               }
           }
        });
        const kidsSectionItems = await db.productSize.count({
           where: {
               product: {
                   category: 'kids'
               }
           }
        });

        console.log(allProducts,menSection,womenSection,kidsSection)

        const data = [
            {
                name: 'all sections',
                quantity: allProducts?._sum?.stackQuantity,
                items: allProductsItems
            },
            {
                name: 'men section',
                quantity: menSection?._sum?.stackQuantity,
                items: menSectionItems
            },
            {
                name: 'women section',
                quantity: womenSection?._sum?.stackQuantity,
                items: womenSectionItems
            },
            {
                name: 'kids section',
                quantity: kidsSection?._sum?.stackQuantity,
                items: kidsSectionItems
            },

        ]

        return NextResponse.json(data,{status: 200})
    }
    catch (error) {
        console.log(error);

        return NextResponse.json(error,{status: 500})
    }
}