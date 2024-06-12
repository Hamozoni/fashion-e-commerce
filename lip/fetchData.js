import axios from "axios"

export const fetchData = async function(url){

  try{
    const {data}= await axios(`${url}`)
    return data
  }catch {
    return null
  }


  }