

export async function fetchData (url){

    const data  = await fetch(`/api/${url}`)

    return data.json()

}