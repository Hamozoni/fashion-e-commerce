import { LiaStarSolid } from "react-icons/lia";

function RatingsReviews() {
  return (
    <section className="">
        <h4>Product Ratings & Reviews</h4>
        <div className="">
            <section className="">
              <h5>Overall Rating</h5>
              <div className="flex items-center gap-2">
                <h5>3.5 out of 5</h5>
                  <div className="flex items-center">
                     <LiaStarSolid />
                     <LiaStarSolid />
                     <LiaStarSolid />
                     <LiaStarSolid />
                     <LiaStarSolid />
                  </div>
                  <p>Based on 117 ratings</p>
              </div>
              <div className="">
                  <table>
                       <tbody>
                           <tr>
                               <td>
                                  5 stars
                                </td>
                               <td className="px-3">
                                   <div className="w-[280px] h-5 border border-gray-200 rounded-md overflow-hidden">
                                       <div style={{width: '55%'}} className="bg-green-900 h-5"></div>
                                   </div>
                               </td>
                               <td>
                                   55%
                               </td>
                           </tr>
                           <tr>
                               <td>
                                  4 stars
                                </td>
                               <td className="px-3">
                                   <div className="w-[280px] h-5 border border-gray-200 rounded-md overflow-hidden">
                                       <div style={{width: '25%'}} className="bg-green-900 h-5"></div>
                                   </div>
                               </td>
                               <td>
                                   25%
                               </td>
                           </tr>
                           <tr>
                               <td>
                                  3 stars
                                </td>
                               <td className="px-3">
                                   <div className="w-[280px] h-5 border border-gray-200 rounded-md overflow-hidden">
                                       <div style={{width: '5%'}} className="bg-green-900 h-5"></div>
                                   </div>
                               </td>
                               <td>
                                   5%
                               </td>
                           </tr>
                           <tr>
                               <td>
                                  2 stars
                                </td>
                               <td className="px-3">
                                   <div className="w-[280px] h-5 border border-gray-200 rounded-md overflow-hidden">
                                       <div style={{width: '7%'}} className="bg-green-900 h-5"></div>
                                   </div>
                               </td>
                               <td>
                                   7%
                               </td>
                           </tr>
                           <tr>
                               <td>
                                  1 stars
                                </td>
                               <td className="px-3">
                                   <div className="w-[280px] h-5 border border-gray-200 rounded-md overflow-hidden">
                                       <div style={{width: '7%'}} className="bg-green-900 h-5"></div>
                                   </div>
                               </td>
                               <td>
                                   7%
                               </td>
                           </tr>
                       </tbody>
                  </table>
              </div>
            </section>
            <section className="">
              <h5>Reviews</h5>
            </section>
        </div>
    </section>
  )
}

export default RatingsReviews