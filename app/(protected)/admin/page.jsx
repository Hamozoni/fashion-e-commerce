
import {OverviewContextProvider} from "./overviewContext";
import {OverviewHeader} from "./_components/overviewHeader"

const  AdminPage = async () => {

  return (
    <div>
      <OverviewContextProvider >
        <OverviewHeader />
      </OverviewContextProvider>
    </div>
  )
}

export default AdminPage