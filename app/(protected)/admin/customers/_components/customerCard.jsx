
import { getCurrency } from "@/lip/getCurrency";
import { RatingStars } from "@/ui/productReviews/components/reviewsRating";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";

export const CustomerCard = ({customer})=> {

    const {image,name,email,reviews,orders} = customer;

    const totalPaid = orders?.length > 0 ? orders.reduce((total,curr)=> total + curr.totalPaidInCent,0) : 0;
    const avgRating = reviews?.length > 0 ? reviews.reduce((total,curr)=> total + curr.rating,0) / reviews?.length : 0;

    const className = {
        tHead: 'bg-white text-sm font-bold text-gray-400 p-2 capitalize',
        bTitle: 'text-xs sm:text-[16px] font-bold capitalize text-teal-950',
        bSTilte: 'text-xs font-bold text-teal-900',
        bTTitle:'text-xs sm:text-sm font-bold text-teal-900 capitalize flex items-center gap-3'
    }
    return (
        <div className="flex p-3 rounded-md bg-gray-50 border border-gray-100 mb-3 flex-wrap">
            <section className="flex-1">
                <h5 className={className.tHead}>info: </h5>
                <div className="flex items-center gap-3 p-2">
                    <div className="max-h-[30px] sm:max-h-[40px] rounded-md overflow-hidden">
                        {
                            image ?
                            <Image src={image} width={40} height={40} alt='user' />
                            : <FaRegUser size={40} />
                        }
                    </div>
                    <div className="">
                        <h6 className={className.bTitle}>{name}</h6>
                        <p className={className.bSTilte}>{email}</p>
                    </div>
                </div>
            </section>
            <section className="flex-1">
                <h5 className={className.tHead}>orders: </h5>
                <div className="p-2">
                    <div className={className.bTTitle}>
                        <h5>total orders: </h5>
                        <p>{orders?.length}</p>
                    </div>
                    <div className={className.bTTitle}>
                        <h5>total paid: </h5>
                        <p>{getCurrency(totalPaid)}</p>
                    </div>
                </div>
            </section>
            <section className="flex-1">
                <h5 className={className.tHead}>reviews: </h5>
                <div className="p-2">
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
    )
}