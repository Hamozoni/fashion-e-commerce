export const metadata = {
    title: "auth page",
    description: "easy register and login"
}

export default function AuthLatout ({children}){
    return (
        <div className="flex items-center justify-center h-[90vh]">
            {children}
        </div>
    )
}