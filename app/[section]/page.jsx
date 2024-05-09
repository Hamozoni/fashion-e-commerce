"use client"

import { useParams,useSearchParams } from "next/navigation"
import { useEffect } from "react";


function page() {
    const {section}= useParams();
    const searchParams = useSearchParams();
    const search = searchParams.get('sub');

    useEffect(()=>{

        

    },[search])

    return (
        <div className="">

        </div>
    )
}

export default page