"use client";

import {
    APIProvider,
    Map,
    AdvancedMarker,
    Marker
} from "@vis.gl/react-google-maps"
import {useRef, useState } from "react";

function AddressMap() {

    const [position,setPosition] = useState({lat: 26.3159003,lng: 50.2052888});
    const [address,setAddress] = useState({});

    const mapRef = useRef()

    const currentPosition = (e)=> {

        setPosition(e.detail.latLng)
        console.log(e.detail.latLng)

    };

    const locateMe = ()=> {
        if(navigator.geolocation){

            navigator.geolocation.getCurrentPosition((e)=>{

                setPosition({lat:e.coords.latitude,lng: e.coords.longitude});
                
            })
                

        }
    }

  return (
    <section 
        className="fixed top-0 left-0 w-[100vw] h-[100vh] z-50 flex justify-center items-center">
        <div className="">
            <h4></h4>
            <div className="w-[600px] h-[600px] relative" >
                <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}

                >
                    <Map 
                        zoomControl={true}
                        onCenterChanged={(e)=> {
                            console.log(e)
                        }}
                        defaultCenter={position}
                        defaultZoom={15}
                        gestureHandling={'greedy'}
                        disableDefaultUI={true}
                        draggableCursor={true}
                        onClick={currentPosition}
                        >
                                {/* <AdvancedMarker position={position} >
                                     
                                </AdvancedMarker> */}
                                <AdvancedMarker position={position}>
                                   {/* <FaMapMarkerAlt size={30} /> */}
                                </AdvancedMarker>
                                   <Marker position={position} />
                    </Map>
                </APIProvider>
                <button 
                    onClick={locateMe}
                    className="absolute bottom-7 right-7 py-2 px-4 rounded-md captialize bg-green-400 text-green-950"
                   >locate me
                </button>
            </div>

        </div>
    </section>
  )
}

export default AddressMap