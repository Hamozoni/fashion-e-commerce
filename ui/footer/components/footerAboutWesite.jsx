const informations = [
    {
        name: 'explore',
        data: ['sale','Store Locator','Gift Card']
    },
    {
        name: 'about',
        data: ['Feedback','Careers','Take a tour','Affiliate program']
    },
    {
        name: 'Help',
        data: ['Contact us','Shipping','Return Process','Return Policy','Help']
    }
]
export const FooterAboutWebate = ()=> {
    return (
        <div className="capitalize">
            <div className="flex gap-5 py-3">
                {
                    informations?.map(({name,data})=> (
                        <div className="">
                            <h4 className="text-lg text-teal-50 font-bold mb-3">{name}</h4>
                            <ul>
                                {
                                    data?.map((name)=> (
                                        <li 
                                            className="text-md text-teal-200 hover:text-teal-50 hover:scale-105"
                                            key={name}>{name}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}