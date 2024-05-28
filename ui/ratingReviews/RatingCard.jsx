import Image from "next/image"

const reviews = [
    {
        autherName : 'mohamed yahaia',
        autherAvatar: '',
        rate : 4,
        heighlight: ' Amazing!',
        createdAt: '25 Apr, 2024',
        image: '/products/1a392cce-01bd-41f8-8cd9-3688080faae6-61vj2VbUKNL._AC_SY500_.jpg',
        review: 'Exactly as described, super fast performanceCompré este ordenador por que mi portátil se ha quedado obsoleto. El uso que le doy es ofimática ligera por lo que no puedo opinar sobre su desempeño en el tema gaming. Para el uso que le doy es perfecto. No se oye nada; está oculto tras el monitor; todo ha funcionado a la primera; he hecho video conferencias de trabajo y ni un problema... Lo recomiendo sin duda.'
    },
    {
        autherName : 'mohamed yahaia',
        autherAvatar: '/products/1a392cce-01bd-41f8-8cd9-3688080faae6-61vj2VbUKNL._AC_SY500_.jpg',
        rate : 4,
        heighlight: ' Amazing!',
        createdAt: '25 Apr, 2024',
        image: '/products/1a392cce-01bd-41f8-8cd9-3688080faae6-61vj2VbUKNL._AC_SY500_.jpg',
        review: 'Exactly as described, super fast performanceCompré este ordenador por que mi portátil se ha quedado obsoleto. El uso que le doy es ofimática ligera por lo que no puedo opinar sobre su desempeño en el tema gaming. Para el uso que le doy es perfecto. No se oye nada; está oculto tras el monitor; todo ha funcionado a la primera; he hecho video conferencias de trabajo y ni un problema... Lo recomiendo sin duda.'
    },
    {
        autherName : 'mohamed yahaia',
        autherAvatar: 'm',
        rate : 4,
        heighlight: ' Amazing!',
        createdAt: '25 Apr, 2024',
        image: null,
        review: 'Exactly as described, super fast performanceCompré este ordenador por que mi portátil se ha quedado obsoleto. El uso que le doy es ofimática ligera por lo que no puedo opinar sobre su desempeño en el tema gaming. Para el uso que le doy es perfecto. No se oye nada; está oculto tras el monitor; todo ha funcionado a la primera; he hecho video conferencias de trabajo y ni un problema... Lo recomiendo sin duda.'
    }
];

import { LiaStarSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";


function RatingCard() {
  return (
    <div>
        {
            reviews?.map((review)=> (
                <div className="py-7 border-b border-gray-00">
                    <div className="flex items-center gap-2 pb-2">
                        {/* <Image src='/products/1a392cce-01bd-41f8-8cd9-3688080faae6-61vj2VbUKNL._AC_SY500_.jpg' width={40} height={40} alt="auther"/>
                         */}
                         <FaRegUser size={30} />
                        <div className="">
                            <h4 className="text-green-900">{review.autherName}</h4>
                             <p className="text-green-800 text-sm">{review.createdAt}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center text-yellow-400">
                            <LiaStarSolid size={20}/>
                            <LiaStarSolid size={20}/>
                            <LiaStarSolid size={20}/>
                            <LiaStarSolid size={20}/>
                            <LiaStarSolid size={20}/>
                        </div>
                        <h5 >{review?.heighlight}</h5>
                    </div>
                    <div className="">
                        <aside className="text-green-800 text-sm pb-3">{review.review}</aside>
                        {
                            review?.image !== null &&
                            <Image src='/products/1a392cce-01bd-41f8-8cd9-3688080faae6-61vj2VbUKNL._AC_SY500_.jpg' width={400} height={400} alt='product image'/>
                        }
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default RatingCard