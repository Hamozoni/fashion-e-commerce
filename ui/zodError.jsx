import { BiSolidError } from "react-icons/bi";
const ZodError = ({error,field})=> {
    return (
        error?.issues?.find(e=> e?.path?.contains(field)) &&

        <p className=" text-rose-500 text-lg font-bold capitalize flex items-center gap-3">
            <BiSolidError />
            {error?.issues?.find(e=> e?.path?.includes(field))?.message }
        </p>
        

    )

};

export default ZodError;