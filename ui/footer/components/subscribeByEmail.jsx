
export const  SubscribeByEmail = ()=> {
    return (
        <div className="capitalize my-3">
            <h4 className="text-teal-50 text-lg mb-3">Get our latest offers and news straight in your inbox.</h4>
            <form className="bg-teal-950 rounded-full border border-teal-600 flex gap-1 p-1" action="">
                <input 
                    className="rounded-full text-teal-50 w-full border-2 border-teal-900 px-4 bg-transparent focus:border-teal-600" 
                    type="text" placeholder="place enter an email address"
                     />
                <button className="rounded-full p-2 font-bold text-lg text-teal-900 max-h-full px-4 bg-white capitalize">subscibe</button>
            </form>
        </div>
    )
}