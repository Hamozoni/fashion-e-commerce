import Image from "next/image";
import offer1 from "../../public/categories/sliders/offer-1.jpg";
import offer2 from "../../public/categories/sliders/offer-2.webp";

const offerImages = [offer1,offer2];



export const Offers = ()=> {
    return (
        <div className="w-full max-w-full relative">
            <div className="flex w-fit min-w-fit overflow-hidden">
                {
                    offerImages?.map((imagePath,index)=> (
                    <div key={index} className="w-full min-w-full ">
                        <Image src={imagePath} width='100%' height='100%' alt="offer" />
                    </div>
                    ))
                }
            </div>
        </div>
    )
}