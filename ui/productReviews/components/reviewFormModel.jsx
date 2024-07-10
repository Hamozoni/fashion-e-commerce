import { BiSave } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"
import { PulseLoader } from "react-spinners"

import {Overlay} from "../../../components/Overlay"


export const ReviewFormModel = ()=> {
    return (
        <>
            <div className={className.WhriteReview}>
                <section className="min-h-fit">
                    <span onClick={()=> setShowModel(false)}><RxCross2 /></span>
                    <header className="text-center mb-4">
                        <h3 className="text-lg text-teal-900 font-bold"
                            >Write a review
                        </h3>
                        <p className="text-teal-700">Tell us what you think about this product</p>
                    </header>
                    <ProductRating />
                    <form action={handleReview} ref={reviewFormRef}>
                        <div className="w-full capitalize">
                            <label 
                                className="text-md text-gray-500 font-bold"
                                htmlFor="reviewImage"
                                > review image:
                            </label>
                            <input
                            className="p-2 my-3 bg-white rounded-md text-gray-500  w-full" 
                                id='reviewImage'
                                type="file" 
                                name='reviewImage'
                                accept="image/*"
                                multiple
                                />
                        </div>
                        <div className="w-full">
                            <label 
                                className=" text-md text-gray-500 font-bold"
                                htmlFor="rateText"
                                > Share your experience:
                            </label>
                            <textarea 
                                className="w-full p-3 my-3 text-teal-900" 
                                id="rateText" 
                                cols="30" 
                                rows="8"
                                name='rateText'
                                placeholder="write a review..."
                                required
                                >

                            </textarea>
                            <ZodError error={error} field='rateText' />

                        </div>
                        <div className="w-full capitalize">
                            <label
                                className="text-lg text-gray-500 font-bold" 
                                htmlFor="rateTitle">
                                give it a title
                            </label>
                            <input 
                                className="w-full p-3 my-3 text-teal-800" 
                                id="rateTitle" 
                                type='text'
                                name="rateTitle"
                                placeholder="review title..."
                                required
                                />
                                <ZodError error={error} field='rateTitle' />
                        </div>
                        <footer className="flex items-center justify-between gap-3 mt-3">
                            <button 
                                disabled={isPending}
                                type="submit"
                                className={`${className.btn}`}
                                >
                                    {
                                        isPending ?  
                                        <PulseLoader size={10} className=" opacity-50"/>
                                        :
                                        <>
                                        <BiSave  size={16}/>save
                                        </>
                                    }
                            </button>
                            <ButtonWithIcon
                                text='cancel'
                                Icon={FcCancel}
                                type="delete"
                                onClick={()=> setShowModel(false)}
                                />
                        </footer>
                    </form>
                </section>
            </div>
            <Overlay onClick={()=> setShowModel(false)}/>
        </>
    )
}