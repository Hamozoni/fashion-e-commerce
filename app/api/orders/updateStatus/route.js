import {db} from "../../../../lip/db" ;

export async function POST (req) {

    try {
        const formData = await req.formData();
        const status = formData.get('status');
        const clientSecret = formData.get('clientSecret');

        const updatedOrder = await db.customerOrder.update({
            where: {clientSecret},
            data : {
                status: status
            }
        })

    }
    catch (error) {

    }


}