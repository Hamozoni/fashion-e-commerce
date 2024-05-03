
function Overlay({onClick}) {
  return (
    <div 
        className="fixed top-0 left-0 min-w-full min-h-svh bg-cyan-950 opacity-30 z-40"
        onClick={onClick}
        >
    </div>
  )
}

export default Overlay