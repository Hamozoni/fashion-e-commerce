import { fetchData } from "../../../lip/fetchData"


const  AdminPage = async () => {
  let data = null
  let error = null


    fetchData('admin/overview')
     .then((data)=> {
       console.log(data)
     })
  

  return (
    <div>Admin page</div>
  )
}

export default AdminPage