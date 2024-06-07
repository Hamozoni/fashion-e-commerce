"use client";

import {
    APIProvider,
    Map,
    AdvancedMarker
} from "@vis.gl/react-google-maps"

function AddressMap() {
  return (
    <section className="w-[100%] h-[100vh]">
        <h4></h4>
        <div className="w-[100%] h-[100%]" >
            <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}>
                <Map center={{lat: 43.64,lng: -79.45}} zoom={12}>

                </Map>
            </APIProvider>
        </div>
    </section>
  )
}

export default AddressMap