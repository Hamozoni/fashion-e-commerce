"use client";
import Image from "next/image";
import offer1 from "../../public/categories/sliders/offer-1.jpg";
import offer2 from "../../public/categories/sliders/offer-2.webp";
import { useEffect, useState } from "react";

const offerImages = [offer1,offer2];

const imagesLength = offerImages?.length - 1

export const Offers = ()=> {

    const [imageIndex,setImageIndex] = useState(0);

    useEffect(()=> {

        const incermentIndex = ()=> {
            setImageIndex(prev=> prev + 1);
        }
        const changeImageInterval = setInterval(()=> {
            switch(imageIndex){
                case imagesLength : setImageIndex(0);
                break;
                default : incermentIndex() ;
            }
        },5000);

        return ()=> clearInterval(changeImageInterval)
    },[]);

    return (
        <div className="w-full max-w-full relative">
            <div className="flex w-fit min-w-fit overflow-hidden" style={{transform:`translateX(-${imageIndex * 100}%)`}}>
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