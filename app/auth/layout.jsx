export const metadata = {
    title: "system auth page",
    description: "easy register and login"
}

export default function AuthLatout ({children}){
    return (
        <div className="flex items-center justify-center h-[90vh] bg-green-50">
            {children}
        </div>
    )
}