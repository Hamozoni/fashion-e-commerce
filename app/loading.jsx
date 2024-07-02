
import {SyncLoader} from "react-spinners";

const loading = () => {
  return (
    <div className="w-full h-dvh flex items-center justify-center bg-black opacity-25">
        <SyncLoader color="#22c55e"/>
    </div>
  )
}

export default loading
