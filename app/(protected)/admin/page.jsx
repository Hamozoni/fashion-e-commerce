import { fetchData } from "../../../lip/fetchData"


const  AdminPage = async () => {
  let data = null
  let error = null

  const fetchOverview = ()=> {
    fetchData('admin/overview')
     .then((data)=> {
       console.log(data)
     })

  }
  

  return (
    <div onClick={fetchOverview}>Admin page</div>
  )
}

export default AdminPage