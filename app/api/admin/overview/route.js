import { NextResponse } from "next/server";
import { db } from "../../../../lip/db";

export async function GET () {

    try {

        const totalRevenue = await db.customerOrder.aggregate({
            _sum : {
                totalPaidInCent: true,
                totalProductsQuantity: true
            }
        });

        const totalOrders = await db.customerOrder.count();
        const totalCompletedOrder = await db.customerOrder.count({
            where : {
            status: 'COMPLETED'
            }
        });
        const totalPendingOrder = await db.customerOrder.count({
            where : {
                status: 'PENDING'
            }
        });
        const totalCanceledOrder = await db.customerOrder.count({
            where : {
                status: 'CANCELLED'
            }
        });
        const totalProcessingOrder = await db.customerOrder.count({
            where : {
                status: 'PROCESSING'
            }
        });

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
        console.log({
            totalRevenue,
            totalOrders,
            totalCompletedOrder,
            totalPendingOrder,
            totalCanceledOrder,
            totalProcessingOrder,
            totalCustomers,
            totalAdmins
        })

        return NextResponse.json({
            totalRevenue,
            totalOrders,
            totalCompletedOrder,
            totalPendingOrder,
            totalCanceledOrder,
            totalProcessingOrder,
            totalCustomers,
            totalAdmins
        },{status: 200})

    } catch (error) {
        return NextResponse.json(error,{status:500})
    }
}