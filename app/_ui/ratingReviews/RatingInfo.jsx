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

function RatingInfo() {

    const className = {
        sectionClass: 'py-3 border-b border-gray-100',
        sectionHead: 'font-bold text-lg text-green-900 pb-2',
        sectionP: 'font-medium text-sm text-green-800'
      }

  return (
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
        <section className={className.sectionClass}>
            <h6 className={className.sectionHead}>How are ratings calculated?</h6>
            <p className={className.sectionP}>To calculate the overall star rating and percentage breakdown by star, we don’t use a simple average. Instead, our system considers things like how recent a review is and if the reviewer bought the item on System. It also analyses reviews to verify trustworthiness.</p>
        </section>
        <section className={className.sectionClass}>
            <h6 className={className.sectionHead}>How do I review this product?</h6>
            <p className={className.sectionP}>If you recently purchased this product from System, you can go to your Orders page and click on the Submit Review button</p>
        </section>
        <section className={className.sectionClass}>
            <h6 className={className.sectionHead}>How do I review this product?</h6>
            <p className={className.sectionP}>If you recently purchased this product from System, you can go to your Orders page and click on the Submit Review button</p>
        </section>

        </section>
    </section>
  )
}

export default RatingInfo