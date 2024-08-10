import { BiSolidError } from "react-icons/bi";
export const ZodError = ({error,field})=> {
    return (
        error?.find(e=> e?.path?.includes(field)) &&

        <p className=" text-rose-500 text-sm font-medium capitalize flex items-center gap-3">
            <BiSolidError />
            {error?.find(e=> e?.path?.includes(field))?.message }
        </p>
        

    )

};