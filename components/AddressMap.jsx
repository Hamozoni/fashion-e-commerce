"use client";

import {
    APIProvider,
    Map,
    AdvancedMarker,
    Marker
} from "@vis.gl/react-google-maps"
import{fetchData}from "../lip/fetchData"
import {useRef, useState } from "react";

function AddressMap() {

    const [position,setPosition] = useState({lat: 26.3159003,lng: 50.2052888});
    const [formatedAddress,setFormatedAddress] = useState(null)
    const [address,setAddress] = useState({});

    const getCurrentAddress = (lat,lng)=>{

        const geocodeApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`
        fetchData(geocodeApiUrl).then((data)=> {

            if(data.status.toLowerCase() === "ok"){
                setFormatedAddress(data.result[0]?.formatted_address);
            }

            setAddress(()=> {
                let address = {}

                data.result[0]?.address_components?.map((el)=> {
                    if(el?.types?.includes('route')) {
                        address.route = el?.long_name
                    }
                    if(el?.types?.includes("sublocality")) {
                        address.political = el?.long_name
                    }
                    if(el?.types?.includes("administrative_area_level_1")) {
                        address.region = el?.long_name
                    }
                    if(el?.types?.includes("country")) {
                        address.country = el?.long_name
                    }
                });

                return address;
                
            })

            console.log(data);
        }).catch((error)=> {
            console.log(error);
        })
        

    }

    const currentPosition = (e)=> {

        const position = e.detail.latLng

        setPosition(position)

        getCurrentAddress(position.lat,position.lng);


    };

    const locateMe = ()=> {
        if(navigator.geolocation){

            navigator.geolocation.getCurrentPosition((e)=>{

                setPosition({lat:e.coords.latitude,lng: e.coords.longitude});
                getCurrentAddress(e.coords.latitude,e.coords.longitude);
                
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
                        center={position}
                        defaultCenter={position}
                        defaultZoom={15}
                        gestureHandling={'greedy'}
                        disableDefaultUI={true}
                        draggableCursor={true}
                        onClick={currentPosition}
                        >
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