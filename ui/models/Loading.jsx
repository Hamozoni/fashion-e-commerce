import { MoonLoader } from "react-spinners"


export function Loading() {
  return (
    <div className="fixed top-0 left-0 w-svw  h-svh z-[100]  bg-black opacity-50 flex items-center justify-center">
      <MoonLoader color=" #14b8a6" size={34} /> 
    </div>
  )
};