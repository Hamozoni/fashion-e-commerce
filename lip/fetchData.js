import axios from "axios"


export const fetchData = async function(url){
    const { data } = await axios(`http://localhost:3000/api/${url}`)
    return data

  }