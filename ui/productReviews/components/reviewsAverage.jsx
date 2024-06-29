import React from 'react'
import { LiaStarSolid } from 'react-icons/lia'

const reviewsAverage = () => {
  return (
    <div className="flex items-center gap-2 mb-3">
        <h5 className="text-xl font-bold text-green-950">3.5 out of 5</h5>
        <div className="flex items-center text-yellow-400 text-[30px]">
        <LiaStarSolid />
        <LiaStarSolid />
        <LiaStarSolid />
        <LiaStarSolid />
        <LiaStarSolid />
        </div>
        <p className="text-md font-medium text-green-800">Based on 117 ratings</p>
    </div>
  )
}

export default reviewsAverage