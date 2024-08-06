import {SyncLoader} from "react-spinners";

const loading = () => {
  return (
    <div className="w-full h-screen max-h-full flex items-center justify-center">
        <SyncLoader color="#5eead4"/>
    </div>
  )
}

export default loading