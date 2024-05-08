"use client"

import { useParams,useSearchParams } from "next/navigation"


function page() {
    const {section}= useParams();
    const searchParams = useSearchParams()
 
    const search = searchParams.get('sub')
    return <p>Post: {section+search}</p>
}

export default page