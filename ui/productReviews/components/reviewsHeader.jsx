"use client";
// react & next
import { useContext, useState } from "react";
// icons
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
// component
import { ButtonWithIcon } from "../../buttons/buttons";
import {AddReviewFormModel} from "../../models/addReviewFormModel";
import { AppContext } from "../../../app/contextProvider";
import { usePathname, useRouter} from "next/navigation";


export function ReviewsHeader() {

    const [showModel,setShowModel] = useState(false);

    const {currentUser} = useContext(AppContext);

    const router = useRouter();
    const pathname = usePathname();

    const handleReviewsModel = ()=> {

      if(currentUser) {
        setShowModel(true)
      }else {
        router.push(`/auth/login?callback=${pathname}`)
      };

    };

  return (

    <div className="mt-8">
        <div className="py-5 border-b border-gray-100 dark:border-stone-900 max-w-[380px] mx-auto">
            <h6 className="text-teal-900 dark:text-teal-100 text-center pb-2 text-lg font-bold"
              >Share your thoughts with other customers
            </h6>
            <ButtonWithIcon
                text='whrite a review'
                Icon={MdOutlineDriveFileRenameOutline}
                type="save"
                onClick={handleReviewsModel}
                />
        </div>
        {
            showModel && (
              currentUser ?
              <AddReviewFormModel setShowModel={setShowModel}/>
              : ''
            )
        }
    </div>
  )
};