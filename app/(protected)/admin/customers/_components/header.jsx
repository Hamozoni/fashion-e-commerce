"use client"
import { FaUsers } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaUserSlash } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
import { LineChart } from "../../_charts/line";
export const Header = ({data})=> {

    const {allCount,adminCount,verifiedCount,unverifiedCount,customers} = data;
    const headerData = [
        {name: 'all customers',count: allCount,Icon: FaUsers},
        {name: 'verified customers',count: verifiedCount,Icon:FaUserCheck },
        {name: 'unverified customers',count: unverifiedCount,Icon:  FaUserSlash},
        {name: 'admins',count: adminCount,Icon: MdOutlineVerifiedUser},
    ]


    console.log({allCount,adminCount,verifiedCount,unverifiedCount,customers})

    return (
        <header className="flex flex-col-reverse lg:flex-row items-stretch gap-3 bg-teal-50 dark:bg-stone-950 border border-teal-200 dark:border-stone-800 p-3 rounded-md mb-8">
            <LineChart
                ChartData={[allCount,adminCount,verifiedCount,unverifiedCount]}
                labels={['all','admin','verified','unverified']}
                bgColors={['#aae978b3']}
                text='customers'
                />
            <ul className="flex gap-2 lg:flex-col flex-1 min-w-[200px] overflow-x-auto">
                {
                    headerData?.map(({name,count,Icon})=> (
                        <li 
                            className="p-3 flex-grow text-center min-w-fit rounded-md bg-white dark:bg-black border border-gray-200 dark:border-stone-800 capitalize"
                            key={name}>
                            <div className="flex items-center text-teal-400 justify-center gap-2 mb-2">
                                <Icon className="text-lg sm:text-xl" />
                                <h5 className="text-sm sm:text-lg font-bold">
                                    {count}
                                </h5>
                            </div>
                            <h6 className="text-gray-500 font-extrabold text-xs">
                                {name}
                            </h6>
                        </li>

                    ))
                }
            </ul>
        </header>
    )
}