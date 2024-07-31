
import React from 'react'
import { fetchData } from '../../../lip/fetchData';

async function orderPage() {

  let data = null;

  const fetchApiData = async ()=> {
       fetchData('orders')
       .then((data)=> {
          console.log(data)
       })
  }

  fetchApiData()


  return (
    <div>orderPage</div>
  )
}

export default orderPage