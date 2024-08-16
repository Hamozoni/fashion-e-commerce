import axios from "axios";

export const  fetchData = async  (endPoint)=> {
    
const options = {
    method: 'GET',
    url: `${process.env.NEXT_PUBLIC_URL}/api/${endPoint}`,
        headers: {
            accept: 'application/json',
        }
    };

    const {data} = await axios(options)

    return data;
};

export const  fetchLocationData = async  (endPoint)=> {
    
  const options = {
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_URL}${endPoint}`,
          headers: {
              accept: 'application/json',
          }
      };
  
      const {data} = await axios(options)
  
      return data;
  };


export const  PostData = async  (endPoint,formData)=> {
    
      const config = {
        headers: { 'content-type': 'multipart/form-data' }
      }

    const {data} =  await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/${endPoint}`,formData, config)

     return data
    };  


export const updateData = async (endPoint)=> {
    
        const {data} = await axios.put(`${process.env.NEXT_PUBLIC_URL}/api/${endPoint}`,{headers: { 'content-type': 'multipart/form-data' }})
    
        return data;
}


