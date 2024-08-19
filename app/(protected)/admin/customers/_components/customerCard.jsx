
import { getCurrency } from "@/lip/getCurrency";
import { RatingStars } from "@/ui/productReviews/components/reviewsRating";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";

export const CustomerCard = ({customer})=> {

    const {image,name,email,reviews,orders} = customer;

    const totalPaid = orders?.length > 0 ? orders.reduce((total,curr)=> total + curr.totalPaidInCent,0) : 0;
    const avgRating = reviews?.length > 0 ? reviews.reduce((total,curr)=> total + curr.rating,0) / reviews?.length : 0;

    const className = {
        card:'flex p-2 gap-2 items-stretch rounded-md bg-gray-50 dark:bg-stone-950 border border-gray-300  dark:border-stone-800 mb-3 flex-wrap',
        bTitle: 'text-xs sm:text-[16px] font-bold capitalize text-teal-950 dark:text-teal-50',
        bSTilte: 'text-xs font-bold text-teal-900 dark:text-teal-100',
        bTTitle:'text-xs sm:text-sm font-bold text-teal-900 dark:text-teal-100 capitalize flex items-center gap-3',
        section:'flex-1 p-2 bg-white dark:bg-black rounded-md border border-gray-200 dark:border-stone-900'
    }
    return (
        <div className={className.card}>
            <section className={className.section}>
                <div className="flex items-center gap-3 ">
                    <div className="max-h-[30px] sm:max-h-[40px] rounded-md overflow-hidden">
                        {
                            image ?
                            <Image src={image} width={40} height={40} alt='user' />
                            : <FaRegUser color="#9ca3af" size={40} />
                        }
                    </div>
                    <div className="">
                        <h6 className={className.bTitle}>{name}</h6>
                        <p className={className.bSTilte}>{email}</p>
                    </div>
                </div>
            </section>
            <div className="flex flex-1 gap-2 items-stretch">
                <section className={className.section}>
                    <div >
                        <div className={className.bTTitle}>
                            <h5 className="mb-2">total orders: </h5>
                            <p>{orders?.length}</p>
                        </div>
                        <div className={className.bTTitle}>
                            <h5>total paid: </h5>
                            <p>{getCurrency(totalPaid)}</p>
                        </div>
                    </div>
                </section>
                <section className={className.section}>
                    <div >
                        <div className={className.bTTitle}>
                            <h5>total reviews: </h5>
                            <p>{reviews?.length}</p>
                        </div>
                        <div className={className.bTTitle}>
                            <h5>rating: </h5>
                            <RatingStars rating={avgRating} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}