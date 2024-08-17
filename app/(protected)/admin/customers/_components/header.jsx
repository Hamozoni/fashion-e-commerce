"use client"
import { FaUsers } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaUserSlash } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
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
        <header>
            <ul className="flex items-center gap-3 py-3">
                {
                    headerData?.map(({name,count,Icon})=> (
                        <li 
                            className="p-3 rounded-md bg-teal-50 border border-teal-200 capitalize"
                            key={name}>
                            <div className="flex items-center text-teal-400 justify-center gap-2 mb-2">
                                <Icon size={26} />
                                <h5 className="text-lg font-bold">{count}</h5>
                            </div>
                            <h6 className="text-gray-500 font-extrabold text-sm">
                                {name}
                            </h6>
                        </li>

                    ))
                }
            </ul>
        </header>
    )
}