import { LiaStarSolid } from "react-icons/lia";

const ratings = [
  {
    name: '5 stars',
    perc: "35%"
  },
  {
    name: '4 stars',
    perc: "15%"
  },
  {
    name: '3 stars',
    perc: "25%"
  },
  {
    name: '2 stars',
    perc: "17%"
  },
  {
    name: '1 stars',
    perc: "17%"
  }
]

function RatingsReviews() {
  return (
    <section className="pb-4">
        <h4 className="pb-2 text-lg font-bold text-green-950">Product Ratings & Reviews</h4>
        <div className="">
            <section className="">
              <h5 className="pb-2 text-md font-medium text-green-900">Overall Rating</h5>
              <div className="flex items-center gap-2">
                <h5 className="text-xl font-bold text-green-900">3.5 out of 5</h5>
                  <div className="flex items-center text-yellow-400 text-[30px]">
                     <LiaStarSolid />
                     <LiaStarSolid />
                     <LiaStarSolid />
                     <LiaStarSolid />
                     <LiaStarSolid />
                  </div>
                  <p className="text-md font-medium text-green-900">Based on 117 ratings</p>
              </div>
              <div className="py-4">
                  <table>
                       <tbody>
                        {
                          ratings?.map((rate)=> (
                            <tr>
                                <td className="text-green-800 pb-2 font-medium">{rate?.name}</td>
                                <td className="px-3">
                                    <div className="w-[280px] h-5 border border-gray-200 rounded-md overflow-hidden">
                                        <div style={{width: rate?.perc}} className="bg-green-900 h-5"></div>
                                    </div>
                                </td>
                                <td className="text-green-800 font-medium"> {rate?.perc}</td>
                            </tr>

                          ))

                        }
                       </tbody>
                  </table>
              </div>
              <section>
                <section>
                    <h6>How are ratings calculated?</h6>
                    <p>To calculate the overall star rating and percentage breakdown by star, we don’t use a simple average. Instead, our system considers things like how recent a review is and if the reviewer bought the item on System. It also analyses reviews to verify trustworthiness.</p>
                </section>
                <section>
                    <h6>How do I review this product?</h6>
                    <p>If you recently purchased this product from System, you can go to your Orders page and click on the Submit Review button</p>
                </section>

              </section>
            </section>
            <section className="">
              <h5>Reviews</h5>
            </section>
        </div>
    </section>
  )
}

export default RatingsReviews