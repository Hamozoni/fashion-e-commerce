import {db} from "../../../../../lip/db";

export async function GET () {
    try{

        const menSection = await db.product.aggregate({
            _sub : {
                productSize : {
                    stackQuantity: true
                }
            },
            where: {
                category: 'men'
            }
        });

        const womenSection = await db.product.aggregate({
            _sub : {
                productSize : {
                    stackQuantity: true
                }
            },
            where: {
                category: 'women'
            }
        });
        const kidsSection = await db.product.aggregate({
            _sub : {
                productSize : {
                    stackQuantity: true
                }
            },
            where: {
                category: 'kids'
            }
        });
    }
    catch (error) {
        console.log(error)
    }
}