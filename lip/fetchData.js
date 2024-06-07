import axios from "axios"
import { getSession } from "next-auth/react"


export const fetchData = async function(url){
   const options = {
    headers: {
      contentType: "json/application"
    }
   }
    const {data } = await axios(`${process.env.NEX_PUBLIC_URL}/api/${url}`)
    return data

  }