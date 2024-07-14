import axios from "axios";

export const  fetchData = async  (endPoint)=> {
    
const options = {
    method: 'GET',
    url: endPoint,
        headers: {
            accept: 'application/json',
        }
    };

    const {data} = await axios.request(options)

    return data;
};


export const  PostData = async  (endPoint,formData)=> {
    
      const config = {
        headers: { 'content-type': 'multipart/form-data' }
      }

    const {data} =  await axios.post(`/api/${endPoint}`,formData, config)

     return data
    };  


