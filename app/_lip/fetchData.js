

export const fetchData = async function(url){
    const { data } = await fetch(`http://localhost:3000/api/${url}`)
    return data

  }