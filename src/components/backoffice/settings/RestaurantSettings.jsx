import axios from "axios"
import { useEffect, useState } from "react"

const RestaurantSettings = function () {

    

    const APIUrlGetSettings = 'http://localhost:8080/restaurant-settings'
    
    const [restaurantSettings, setRestaurantSettings] = useState({})

    const token = localStorage.getItem("token")

    const getRestaurantSettings = () => {
        axios
        .get(APIUrlGetSettings, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        })
        .then((response) => {
            console.log(response.data.content[0], 'settings')
            
            setRestaurantSettings(response.data.content[0])
        })
        .catch((error) => {
            console.log("errore nel recupero menu", error)
            setIsLoading(false)
            setIsError(true)
            
        })
    }

    useEffect(()=>{
        getRestaurantSettings()
    }, [])


    /* dati da mostrare per i settings */
    // max capacity,
    // max party size
    // slot duration
    // opening time
    // closing time
    // days
    // reservation advance days
    // reservation min minutes
    // reservation  cancellation hours


    return (
        <section className="p-5 flex flex-col md:flex-wrap items-center gap-5">
            <div className="flex flex-row gap-5">
                <div className="bg-pink-900 p-3 rounded-lg cursor-pointer text-center">
                    <p className="">Horario de apertura: </p>
                    <p className="text-2xl">{restaurantSettings.openingTime}</p>
                </div>
                <div className="bg-pink-900 p-3 rounded-lg cursor-pointer text-center">
                    <p>Hora de cierre:</p>
                    <p className="text-2xl">{restaurantSettings.closingTime}</p>
                </div>
                <div className="bg-pink-900 p-3 rounded-lg cursor-pointer text-center">
                    <p>Dìas cerrados:</p>
                    <p className="text-2xl">{restaurantSettings.closedDays}</p>
                </div>
            </div>

            <div className="flex flex-row gap-5">
                <div className="bg-pink-900 p-3 rounded-lg cursor-pointer text-center">
                    <p>Restaurant capacity: </p>
                    <p className="text-2xl">{restaurantSettings.maxCapacity}</p>                
                </div>
                <div className="bg-pink-900 p-3 rounded-lg cursor-pointer text-center">
                    <p>Max party size:</p>
                    <p className="text-2xl">{restaurantSettings.maxPartySize}</p>
                </div>
                <div className="bg-pink-900 p-3 rounded-lg cursor-pointer text-center">
                    <p>slotDurationMinutes:</p>
                    <p className="text-2xl">{restaurantSettings.slotDurationMinutes}</p>
                </div>

            </div>

            <div className="flex flex-row gap-5">
                <div className="bg-pink-900 p-3 rounded-lg cursor-pointer text-center">
                    <p>reservationAdvanceDays:</p>
                    <p className="text-2xl">{restaurantSettings.reservationAdvanceDays}</p>
                </div>
                <div className="bg-pink-900 p-3 rounded-lg cursor-pointer text-center">
                    <p>minAdvanceMinutes:</p>
                    <p className="text-2xl">{restaurantSettings.minAdvanceMinutes}</p>
                </div>
                <div className="bg-pink-900 p-3 rounded-lg cursor-pointer text-center">
                    <p>cancellationLimitHours:</p>
                    <p className="text-2xl">{restaurantSettings.cancellationLimitHours}</p>
                </div>

            </div>
        </section>
    )
}

export default RestaurantSettings