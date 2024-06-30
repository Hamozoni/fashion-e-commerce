import { TiStarFullOutline } from "react-icons/ti";
import { CiStar } from "react-icons/ci";

// array for rating stars
const ratingStars = new Array(5).fill('start');

const Stars = ({rating,index})=> {
    return (
        rating > index ?
        <TiStarFullOutline size={26} color="#eab308"/>
        : <CiStar size={26} color="#eab308" />
    )
}

export const RatingStars = ({rating,setRating=()=>""})=> {

    return (
        <div className="flex items-center justify-center">
            {
                ratingStars?.map((_,index)=> (
                <button 
                    key={index} 
                    onClick={()=> setRating(+index + 1)}
                    >
                    <Stars key={index} rating={rating} index={index}/>
                </button>

                ))
            }
            
        </div>
    )
}