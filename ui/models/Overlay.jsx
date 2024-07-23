
export function Overlay({onClick}) {
  return (
    <div 
        className="fixed top-0 left-0 w-full min-w-full h-screen min-h-screen bg-white cursor-pointer opacity-30 z-40"
        onClick={onClick}
        >
    </div>
  )
};