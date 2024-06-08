"use client";

import {
    APIProvider,
    Map,
    AdvancedMarker
} from "@vis.gl/react-google-maps"
import {useMemo, useState } from "react";

function AddressMap({onClick}) {

    // const [position,setPosition] = useState({lat: 26.3159003,lng: 50.2052888})



    // const options = useMemo(()=> {

    //     return {
    //     disableDefaultUI: false,
    //     zoomControl: true,
    //     scrollwheel: true,
    //     draggable: true
    //     }
    // },[]);

  return (
    <section onClick={onClick} 
        className="fixed top-0 left-0 w-[100vw] h-[100vh] z-50 flex justify-center items-center">
        <div className="">
            <h4></h4>
            {/* <div className="w-[600px] h-[600px]" >
                <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}>
                    <Map 
                        center={position} 
                        zoom={12}
                        options={options}
                        >
                            <AdvancedMarker position={position}/>
                    </Map>
                </APIProvider>
            </div> */}

        </div>
    </section>
  )
}

export default AddressMap