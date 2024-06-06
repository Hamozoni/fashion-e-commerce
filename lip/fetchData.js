import axios from "axios"


export const fetchData = async function(url){
    const { data } = await axios(`${process.env.NEX_PUBLIC_URL}/api/${url}`)
    return data

  }