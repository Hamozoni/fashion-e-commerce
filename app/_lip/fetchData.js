import axios from "axios"

export async function fetchData (url,opations){

    let data ;
    let error = null;
    await axios(`/api/${url}`,opations).then((d)=>{
        data = d
    }).catch(er=> {
        error = er
    })

    return {data,error}

}