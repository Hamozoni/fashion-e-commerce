import { BiSolidError } from "react-icons/bi";
const ZodError = ({error,field})=> {
    return (
        error?.issues?.find(e=> e?.path?.includes(field)) &&

        <p className=" text-rose-500 text-sm font-medium capitalize flex items-center gap-3">
            <BiSolidError />
            {error?.issues?.find(e=> e?.path?.includes(field))?.message }
        </p>
        

    )

};

export default ZodError;