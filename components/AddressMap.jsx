"use client";
import { useRouter } from "next/navigation";
import {useEffect, useState } from "react";
// icons
import { RxCross2 } from "react-icons/rx";
// google map
import {
    APIProvider,
    Map,
    Marker
} from "@vis.gl/react-google-maps";
// lip
import{fetchData}from "../lip/fetchData";
// hooks
import { useCurrentUser } from "../hooks/useCurrentUser";
// server actions
import {addNewAddress} from "../actions/user/addNewAddress"

function AddressMap({onClick}) {

    const [position,setPosition] = useState({lat: 26.3159003,lng: 50.2052888});
    const [formatedAddress,setFormatedAddress] = useState("")
    const [address,setAddress] = useState({});
    
    const user = useCurrentUser();
    const route = useRouter();

    useEffect(()=> {
        if(user?.address){
            const {address} = user;
            setFormatedAddress(address?.formatedAddress);
            setPosition({lat: address?.lat, lng: address?.lng})
        }
    },[]);

    const getCurrentAddress = (lat,lng)=>{

        const geocodeApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`

        fetchData(geocodeApiUrl).then((data)=> {
            if(data.status === "OK"){

              setFormatedAddress(data.results[0]?.formatted_address);
               const getAddress = ()=> {
                    let address = {}
                    data?.results[0]?.address_components?.map((el)=> {

                        if(el?.types?.includes('route')) {
                            address.route = el?.long_name
                        }
                        if(el?.types?.includes("sublocality")) {
                            address.neighborhood = el?.long_name
                        }
                        if(el?.types?.includes("administrative_area_level_1")) {
                            address.city = el?.long_name
                        }
                        if(el?.types?.includes("country")) {
                            address.country = el?.long_name
                        }
                    });
                    console.log(address)
    
                    return address;
                    
                }

                const address  = getAddress()
                setAddress({...address})
            }

        }).catch((error)=> {
            
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

    const confirmLocation = ()=> {

        if(user){

            const reqBody = {
                email: user.email,
                data: {
                    ...position,
                    ...address,
                    formatedAddress 
                }
            }
             addNewAddress(reqBody)
            .then((data)=> {

                console.log(data)
                if(data?.success) {
                    onClick();
                }
            })

        }else {
            route.push('/auth/login');
            onClick();
        }
    }

  return (
    <section 
        onClick={(e)=> {
            if(e.target.classList.contains("grand")){
                onClick()
            }
        }}
        className="grand capitalize fixed top-0 left-0 w-[100vw] h-[100vh] z-50 flex justify-center items-center ">
        <div className="w-[500px] h-[600px] bg-slate-50 rounded-md">
            <header className="p-3">
                <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl text-green-800">add new address</h4>
                    <button onClick={onClick}>
                        <RxCross2 />
                    </button>
                </div>
                <div className="rounded-md p-2 border border-green-100">
                    { formatedAddress ? <p>{formatedAddress}</p> :"your address..." }
                </div>
            </header>
            <div className="relative w-[500px] h-[400px]" >
                <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}

                >
                    <Map 
                        zoomControl={true}
                        defaultCenter={position}
                        center={position}
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
                    className="absolute bottom-[30px] left-0 py-2 px-4 rounded- bg-green-400 text-green-950"
                   >locate me
                </button>
            </div>
            {
                !!formatedAddress && 
                <button
                onClick={confirmLocation}
                    className="py-2 bg-green-400 text-green-950 w-full cursor-pointer" 
                    // disabled={!!formatedAddress}
                    >confirm location
                </button>
            }

        </div>
    </section>
  )
}

export default AddressMap