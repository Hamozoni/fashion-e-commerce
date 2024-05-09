import axios from "axios"


export const fetchData = async function(url){
    const {data} = await axios(`api/${url}`)
    return data

  }