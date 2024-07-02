
"use client";

import { useState } from "react";

const productSelectSize = ({sizes,selectedSize,setSelectedSize}) => {

    const [isSizes,setSizes] = useState(false);

  return (
    <div className="">
        <button>
             <h6>{selectedSize ? '' :'size: '}</h6>
        </button>
        <ul>
            {
                sizes?.map(size=> (
                    <li key={size}>

                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default productSelectSize