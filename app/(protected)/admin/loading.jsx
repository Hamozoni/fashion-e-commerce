import {SyncLoader} from "react-spinners";

const loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
        <SyncLoader color="#22c55e"/>
    </div>
  )
}

export default loading