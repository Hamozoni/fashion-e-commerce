
import { getCurrency } from "@/lip/getCurrency";
import { RatingStars } from "@/ui/productReviews/components/reviewsRating";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";

export const CustomerCard = ({customer})=> {

    const {image,name,email,reviews,orders} = customer;

    const totalPaid = orders.reduce((prev,curr)=> prev.totalPaidInCent + curr.totalPaidInCent ,0);
    const avgRating = reviews.reduce((prev,curr)=> prev.rating + curr.rating,0) / reviews?.length
    return (
        <div className="">
            <section className="">
                <h5>info: </h5>
                <div className="">
                    <div className="">
                        {
                            image ?
                            <Image src={image} width={70} height={70} alt='user' />
                            : <FaRegUser size={70} />
                        }
                    </div>
                    <div className="">
                        <h6>{name}</h6>
                        <p>{email}</p>
                    </div>
                </div>
            </section>
            <section className="">
                <h5>orders: </h5>
                <div className="">
                    <div className="">
                        <h5>total orders: </h5>
                        <p>{orders?.length}</p>
                    </div>
                    <div className="">
                        <h5>total paid: </h5>
                        <p>{getCurrency(totalPaid)}</p>
                    </div>
                </div>
            </section>
            <section className="">
                <h5>reviews: </h5>
                <div className="">
                    <div className="">
                        <h5>total reviews: </h5>
                        <p>{reviews?.length}</p>
                    </div>
                    <div className="">
                        <h5>rating: </h5>
                        <RatingStars rating={avgRating} />
                    </div>
                </div>
            </section>
        </div>
    )
}