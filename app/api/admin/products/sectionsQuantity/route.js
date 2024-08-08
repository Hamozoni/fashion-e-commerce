import { NextResponse } from "next/server";
import {db} from "../../../../../lip/db";

export async function GET () {
    try{

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
        const allMenProduct = await db.product.count({where: {category: 'men'}});
        const allWomenProduct = await db.product.count({where: {category: 'women'}});
        const allKidsProduct = await db.product.count({where: {category: 'kids'}});

        console.log(allProducts,menSection,womenSection,kidsSection)

        const data = [
            {
                name: 'men',
                quantity: menSection?._sum?.stackQuantity,
                items: menSectionItems,
                products: allMenProduct
            },
            {
                name: 'women',
                quantity: womenSection?._sum?.stackQuantity,
                items: womenSectionItems,
                products:allWomenProduct
            },
            {
                name: 'kids',
                quantity: kidsSection?._sum?.stackQuantity,
                items: kidsSectionItems,
                products: allKidsProduct
            },

        ]

        return NextResponse.json(data,{status: 200})
    }
    catch (error) {
        console.log(error);

        return NextResponse.json(error,{status: 500})
    }
}