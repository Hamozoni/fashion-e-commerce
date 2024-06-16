// "use client"
import {SyncLoader} from "react-spinners"
const loading = () => {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
        <SyncLoader/>
    </div>
  )
}

export default loading
