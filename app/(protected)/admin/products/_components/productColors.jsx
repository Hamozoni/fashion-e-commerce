import {getCurrency} from "../../../../../lip/getCurrency";

export const ProductColors = ({color: {color,priceInHalala,offerPriceInHalala,offerExpiresAt,colorName},sizes})=> {
     const className = {
          smStitle : 'text-xs font-bold text-gray-600 dark:text-gray-300'
      };

     return (
          <div key={color} className=" p-[2px] rounded-md bg-white dark:bg-stone-800 flex-grow" >
               <div className="px-2 flex items-center justify-between gap-4 py-1 flex-wrap">
                    <h5 className={`${offerPriceInHalala ? 'line-through' :''} ${className.smStitle}`}>
                         {getCurrency(priceInHalala)}
                    </h5>
                    {
                        offerPriceInHalala && (
                         <div className="flex items-center gap-2">
                              <h5 className={className.smStitle}>
                                   {getCurrency(offerPriceInHalala)}
                              </h5>
                              <time 
                                   className={className.smStitle}
                                   datetime={offerExpiresAt}>
                                  <small>
                                       expire date: {new Date(offerExpiresAt).toLocaleString()}
                                   </small> 
                              </time>
                         </div>
                        )
                    }
               </div>
               <div className="flex gap-2 items-center p-2 rounded-md bg-gray-50 dark:bg-stone-950 flex-grow">
                     <div 
                         style={{backgroundColor: color}} 
                         className=" h-[38px] flex-1 rounded-md border border-teal-100 mt-2"
                         >

                    </div>
                    <div className="">
                         <h6 className={className.smStitle}>sizes: </h6>
                         <h6 className={className.smStitle}>quantities: </h6>
                    </div>
               {
                    sizes?.map(({colorName : color,shortName,stackQuantity})=> (
                         colorName === color ?
                         <div className="text-center bg-white dark:bg-stone-800 p-2 rounded-md">
                              <h6 className={className.smStitle}>{shortName}</h6>
                              <p className={className.smStitle}>{stackQuantity}</p>
                         </div>
                         : null
                    ))
               }

               </div>
          </div>
     )
}