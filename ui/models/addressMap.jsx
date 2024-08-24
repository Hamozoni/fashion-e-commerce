"use client";
import { useRouter } from "next/navigation";
import {useContext, useEffect, useState, useTransition } from "react";
// icons
import { RxCross2 } from "react-icons/rx";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { AiOutlineSave } from "react-icons/ai";
// google map
import {
    APIProvider,
    Map,
    Marker
} from "@vis.gl/react-google-maps";
// fetch api
import{fetchLocationData}from "../../lip/fetchData";
// server actions
import {addNewAddress} from "../../actions/user/addNewAddress";
// component
import { ButtonWithIcon } from "../buttons/buttons";
// app context
import { AppContext } from "../../app/contextProvider";
import { useSession } from "next-auth/react";

export function AddressMap({onClick}) {  

    const [position,setPosition] = useState({lat: 26.3159003,lng: 50.2052888});
    const [formatedAddress,setFormatedAddress] = useState("")
    const [address,setAddress] = useState({});
    const [isLocateMeCenter,setIsLocateMeCenter] = useState(false);
    
    const {update} = useSession();
    const [loading,startTranation] = useTransition()
    const {currentUser,setCurrentUser} = useContext(AppContext);
    const route = useRouter();

    useEffect(()=> {
        if(currentUser?.address){
            const {address} = currentUser;
            setFormatedAddress(address?.formatedAddress);
            setPosition({lat: address?.lat, lng: address?.lng})
        }
    },[currentUser?.address]);

    const getCurrentAddress = (lat,lng)=>{

        const geocodeApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`

        fetchLocationData(geocodeApiUrl).then((data)=> {
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
        setIsLocateMeCenter(false)
    };

    const locateMe = ()=> {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((e)=>{
                setPosition({lat:e.coords.latitude,lng: e.coords.longitude});
                getCurrentAddress(e.coords.latitude,e.coords.longitude);
                setIsLocateMeCenter(true)
                
            });       

        };
    };

    const confirmLocation = async()=> {

        if(currentUser){

            const reqBody = {
                email: currentUser.email,
                data: {
                    ...position,
                    ...address,
                    formatedAddress 
                }
            }

            startTranation(()=> {
                addNewAddress(reqBody)
               .then((data)=> {
                   if(data?.data) {
                    setCurrentUser( prev=> {
                        return {...prev,address: data.data}
                    })
                       onClick();
                       update();
                   }
               })
            })

        }else {
            route.push('/auth/login');
            onClick();
        }
    };

  return (
    <section 
        onClick={(e)=> {
            if(e.target.classList.contains("grand")){
                onClick();
            }
        }}
        className="grand capitalize fixed top-0 left-0 w-[100vw] h-[100vh] z-50 flex justify-center items-center ">
        <div className="w-[400px] sm:w-[630px] md:w-[750px] max-w-[98%] h-[98%] flex flex-col border border-gray-200 dark:border-stone-700 bg-gray-50 dark:bg-stone-950 rounded-md p-3">
            <header className="py-3 flex-1">
                <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg text-teal-950 dark:text-teal-50 font-bold">
                        add new address
                    </h4>
                    <button 
                        onClick={onClick} 
                        className="text-teal-950 dark:text-teal-50"
                         >
                        <RxCross2 size={24} />
                    </button>
                </div>
                <div className="rounded-md p-2 text-teal-900 dark:text-teal-100 font-bold text-sm border border-gray-200 dark:border-stone-700">
                    { formatedAddress ? <p>{formatedAddress}</p> :"your address..." }
                </div>
            </header>
            <div className="w-full h-full flex-3" >
                <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}>
                    <Map 
                        zoomControl={true}
                        defaultCenter={position}
                        center={isLocateMeCenter ? position : null}
                        defaultZoom={15}
                        gestureHandling={'greedy'}
                        disableDefaultUI={true}
                        draggableCursor={true}
                        onClick={currentPosition}
                        >
                            <Marker position={position} />
                    </Map>
                </APIProvider>
            </div>
            <div className="py-3 flex-1 flex gap-3">
                <ButtonWithIcon 
                    text="locate me"
                    Icon={FaLocationCrosshairs}
                    type='save'
                    disabled={loading}
                    onClick={locateMe}
                />
                {
                    !!formatedAddress &&
                    <ButtonWithIcon 
                        text="save location"
                        Icon={AiOutlineSave}
                        type='primary'
                        disabled={loading}
                        onClick={confirmLocation}
                    />
                }
            </div>
            

        </div>
    </section>
  )
};
