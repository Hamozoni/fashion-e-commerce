import { fetchData } from "../../../lip/fetchData"


const  AdminPage = async () => {
  let data = null
  let error = null

  const fetchOverview = async ()=> {
    try {
  
      fetchData('admin/overview')
      .then((data)=> {
        console.log(data)
      })
    }
    catch (error) {
  
    };
  }

  fetchOverview();


  return (
    <div>Admin page</div>
  )
}

export default AdminPage