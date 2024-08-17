import { FaUsers } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaUserSlash } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa6";
export const Header = ({data})=> {

    const {allCount,adminCount,verifiedCount,unverifiedCount} = data;
    const headerData = [
        {name: 'all customers',count: allCount,Icon: FaUsers},
        {name: 'verified customers',count: verifiedCount,Icon:FaUserCheck },
        {name: 'unverified customers',count: unverifiedCount,Icon:  FaUserSlash},
        {name: 'admins',count: adminCount,Icon: MdOutlineVerifiedUser},
    ]


    console.log({allCount,adminCount,verifiedCount,unverifiedCount})

    return (
        <header>
            <ul className="flex items-center gap-5">
                {
                    headerData?.map(({name,count,Icon})=> (
                        <li key={name}>
                            <div className="flex items-center gap-3">
                                <Icon />
                                <h5>{count}</h5>
                            </div>
                            <h6>{name}</h6>
                        </li>

                    ))
                }
            </ul>
        </header>
    )
}