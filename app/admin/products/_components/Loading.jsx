import { MoonLoader } from "react-spinners"


function Loading() {
  return (
    <div className="fixed top-0 left-0 w-svw  h-svh z-50  bg-black opacity-50 flex items-center justify-center">
      <MoonLoader color=" #14b8a6" size={24} /> 
    </div>
  )
}

export default Loading