import { NextResponse } from "next/server";
import { db } from "@/lip/db";

export async function GET (req) {

    try {

        const totalRevenue = await db.customerOrder.aggregate({
            _sum : {
                totalPaidInCent: true,
                totalProductsQuantity: true
            }
        });

        const totalOrders = await db.customerOrder.count();

        const totalCustomers = await db.user.count({
            where : {
                role: 'USER'
            }
        });

        const totalAdmins = await db.user.count({
            where : {
                role: 'ADMIN'
            }
        });

        const data = {
            totalRevenue: totalRevenue?._sum?.totalPaidInCent,
            totalOrderdProducts: totalRevenue?._sum?.totalProductsQuantity,
            totalOrders,
            totalCustomers,
            totalAdmins
        }

        return NextResponse.json(data,{status: 200})

    } catch (error) {
        console.log(error)
        return NextResponse.json(error,{status:500})
    }
}