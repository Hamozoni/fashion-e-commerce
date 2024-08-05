import { NextResponse } from "next/server";

export async function GET () {

    try {

        const totalRevenue = await db.customerOrder.aggregate({
            _sum : {
                totalPaidInCent: true,
                totalProductsQuantity: true
            }
        });

        // PENDING
        // PROCESSING
        // COMPLETED
        // CANCELLED

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

        console.log({
            totalRevenue,
            totalOrders,
            totalCompletedOrder,
            totalPendingOrder,
            totalCanceledOrder,
            totalProcessingOrder
        })

        return NextResponse.json({
            totalRevenue,
            totalOrders,
            totalCompletedOrder,
            totalPendingOrder,
            totalCanceledOrder,
            totalProcessingOrder
        },{status: 200})

    } catch (error) {
        console.log(error)
    }
}