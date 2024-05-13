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
                               <td>
                                   <div className="w-[200px] h-3 border border-gray-200 rounded-md overflow-hidden">
                                       <div style={{width: '55%'}} className="bg-green-900 h-3"></div>
                                   </div>
                               </td>
                               <td>
                                   55%
                               </td>
                           </tr>
                           <tr>
                               <td>
                                  5 stars
                                </td>
                               <td>
                                   <div className="w-[200px] h-3 border border-gray-200 rounded-md overflow-hidden">
                                       <div style={{width: '55%'}} className="bg-green-900 h-3"></div>
                                   </div>
                               </td>
                               <td>
                                   55%
                               </td>
                           </tr>
                           <tr>
                               <td>
                                  5 stars
                                </td>
                               <td>
                                   <div className="w-[200px] h-3 border border-gray-200 rounded-md overflow-hidden">
                                       <div style={{width: '55%'}} className="bg-green-900 h-3"></div>
                                   </div>
                               </td>
                               <td>
                                   55%
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