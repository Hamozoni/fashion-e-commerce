"use client";
// react & next
import { useState } from "react";
// icons
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
// component
import { ButtonWithIcon } from "../buttons/buttons";
import {AddReviewFormModel} from "../models/addReviewFormModel";


export function ReviewsHeader() {

    const [showModel,setShowModel] = useState(false);

  return (

    <div className="mt-8">
        <div className="py-5 border-b border-gray-100 max-w-[380px] mx-auto">
            <h6 className="text-teal-900 text-center pb-2 text-lg font-bold"
              >Share your thoughts with other customers
            </h6>
            <ButtonWithIcon
                text='whrite a review'
                Icon={MdOutlineDriveFileRenameOutline}
                type="save"
                onClick={()=> setShowModel(true)}
                />
        </div>
        {
            showModel ? 
             <AddReviewFormModel setShowModel={setShowModel}/>
            :''
        }
    </div>
  )
};