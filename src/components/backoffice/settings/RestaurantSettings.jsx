import axios from "axios"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

const RestaurantSettings = function () {

    

    const APIUrlGetSettings = 'http://localhost:8080/restaurant-settings'
    const token = localStorage.getItem("token")
    
    /* stati */
    const [restaurantSettings, setRestaurantSettings] = useState({})
    // modal
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedField, setSelectedField] = useState(null)
    const [inputValue, setInputValue] = useState("")
    const [selectedDays, setSelectedDays] = useState([])

    const fieldConfig = {
        openingTime: {
            label: "horario de apertura",
            type: "time"
        },
        closingTime: {
            label: "hora de cierre",
            type: "time"
        },
        closedDays: {
            label: "dìas cerrados",
            type: "multiselect"
        },
        maxCapacity: {
            label: "capacidad del restaurante",
            type: "number"
        },
        maxPartySize: {
            label: "tamaño máximo del grupo",
            type: "number"
        },
        slotDurationMinutes: {
            label: "duración slot (minutos)",
            type: "number"
        },
        reservationAdvanceDays: {
            label: "anticipación reserva (días)",
            type: "number"
        },
        minAdvanceMinutes: {
            label: "anticipación reserva (minutos)",
            type: "number"
        },
        cancellationLimitHours: {
            label: "límite de cancelación (horas)",
            type: "number"
        },
    }

    /* getSettings */

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


    /* day toggle */

    const handleDayToggle = (e) => {
        const value = e.target.value

        if (selectedDays.includes(value)) {
            setSelectedDays(prev => prev.filter(day => day !== value))
        } else {
            setSelectedDays(prev => [...prev, value])
        }
    }

    /* format days spanish */

    const daysMap = {
        MONDAY: "Lunes",
        TUESDAY: "Martes",
        WEDNESDAY: "Miércoles",
        THURSDAY: "Jueves",
        FRIDAY: "Viernes",
        SATURDAY: "Sábado",
        SUNDAY: "Domingo"
    }

    /* Update Settings */

   const handleSave = () => {

        let valueToSend

        if (fieldConfig[selectedField].type === "multiselect") {
            valueToSend = selectedDays
        } else if (fieldConfig[selectedField].type === "number") {
            valueToSend = Number(inputValue)
        } else {
            valueToSend = inputValue
        }

        axios
            .patch(APIUrlGetSettings, {
                [selectedField]: valueToSend
            }, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        })
            .then((res) => {

                setRestaurantSettings(prev => ({
                    ...prev,
                    [selectedField]: valueToSend
                }))

                Swal.fire({
                    icon: "success",
                    title: "Updated!",
                    text: "Setting updated successfully"
                })

                setIsModalOpen(false)
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: err.response?.data || "Error updating setting"
                })
            })
    }



    useEffect(()=>{
        getRestaurantSettings()
    }, [])

    return (
        <section className="p-2 md:p-5 flex flex-col md:flex-wrap items-center gap-5">

            <div className="flex flex-wrap justify-center md:flex-row gap-2 md:gap-5">

                <div className="bg-pink-900 p-3 rounded-lg cursor-pointer text-center"  onClick={() => {
                        setSelectedField("openingTime")
                        setInputValue(restaurantSettings.openingTime)
                        setIsModalOpen(true)
                    }}>
                    <p className="">Horario de apertura: </p>
                    <p className="text-2xl">{restaurantSettings.openingTime}</p>
                </div>

                <div className="bg-pink-900 p-3 rounded-lg cursor-pointer text-center" onClick={() => {
                        setSelectedField("closingTime")
                        setInputValue(restaurantSettings.closingTime)
                        setIsModalOpen(true)
                    }}>
                    <p>Hora de cierre:</p>
                    <p className="text-2xl">{restaurantSettings.closingTime}</p>
                </div>

                <div className="bg-pink-900 p-3 rounded-lg cursor-pointer text-center" onClick={() => {
                        setSelectedField("closedDays")
                        setInputValue(restaurantSettings.closedDays)
                        setIsModalOpen(true)
                    }}>
                    <p>Dìas cerrados:</p>
                    <p className="text-2xl">{restaurantSettings.closedDays?.map(day => daysMap[day]).join(", ")}</p>
                </div>
            </div>

            <div className="flex flex-wrap md:flex-row justify-center gap-2 md:gap-5">
                <div className="bg-pink-900 p-3 rounded-lg cursor-pointer text-center" onClick={() => {
                        setSelectedField("maxCapacity")
                        setInputValue(restaurantSettings.maxCapacity)
                        setIsModalOpen(true)
                    }}>
                    <p>Capacidad del restaurante: </p>
                    <p className="text-2xl">{restaurantSettings.maxCapacity}</p>                
                </div>
                <div className="bg-pink-900 p-3 rounded-lg cursor-pointer text-center" onClick={() => {
                        setSelectedField("maxPartySize")
                        setInputValue(restaurantSettings.maxPartySize)
                        setIsModalOpen(true)
                    }}>
                    <p>Tamaño máximo del grupo:</p>
                    <p className="text-2xl">{restaurantSettings.maxPartySize}</p>
                </div>
                <div className="bg-pink-900 p-3 rounded-lg cursor-pointer text-center" onClick={() => {
                        setSelectedField("slotDurationMinutes")
                        setInputValue(restaurantSettings.slotDurationMinutes)
                        setIsModalOpen(true)
                    }}>
                    <p>Duración slot (minutos):</p>
                    <p className="text-2xl">{restaurantSettings.slotDurationMinutes}</p>
                </div>

            </div>

            <div className="flex flex-wrap md:flex-row justify-center gap-2 md:gap-5">
                <div className="bg-pink-900 p-3 rounded-lg cursor-pointer text-center" onClick={() => {
                        setSelectedField("reservationAdvanceDays")
                        setInputValue(restaurantSettings.reservationAdvanceDays)
                        setIsModalOpen(true)
                    }}>
                    <p>Anticipación reserva (días):</p>
                    <p className="text-2xl">{restaurantSettings.reservationAdvanceDays}</p>
                </div>
                <div className="bg-pink-900 p-3 rounded-lg cursor-pointer text-center" onClick={() => {
                        setSelectedField("minAdvanceMinutes")
                        setInputValue(restaurantSettings.minAdvanceMinutes)
                        setIsModalOpen(true)
                    }}>
                    <p>Anticipación reserva (minutos):</p>
                    <p className="text-2xl">{restaurantSettings.minAdvanceMinutes}</p>
                </div>
                <div className="bg-pink-900 p-3 rounded-lg cursor-pointer text-center" onClick={() => {
                        setSelectedField("cancellationLimitHours")
                        setInputValue(restaurantSettings.cancellationLimitHours)
                        setIsModalOpen(true)
                    }}>
                    <p>Límite de cancelación (horas):</p>
                    <p className="text-2xl">{restaurantSettings.cancellationLimitHours}</p>
                </div>

            </div>

            {/* modal */}

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white text-black p-6 rounded-lg w-96">
                    
                    <h2 className="text-xl font-bold mb-4">
                        Modifica {fieldConfig[selectedField].label}
                    </h2>

                    {fieldConfig[selectedField].type === "multiselect" ? (

                        <div className="grid grid-cols-2 gap-2 mb-4">
                        {["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
                            .map(day => (
                            <label key={day} className="flex items-center gap-2">
                                <input
                                type="checkbox"
                                value={day}
                                checked={selectedDays.includes(day)}
                                onChange={handleDayToggle}
                                />
                                {day}
                            </label>
                        ))}
                        </div>

                    ) : (

                        <input
                        type={fieldConfig[selectedField].type}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="border p-2 w-full mb-4"
                        />

                    )}

                    <div className="flex justify-end gap-3">
                        <button
                        onClick={() => setIsModalOpen(false)}
                        className="px-4 py-2 bg-gray-300 rounded"
                        >
                        Cancel
                        </button>

                        <button
                        
                        className="px-4 py-2 bg-pink-700 text-white rounded"
                        onClick={handleSave}
                        >
                        Save
                        </button>
                    </div>

                    </div>
                </div>
            )}
        </section>
    )
}

export default RestaurantSettings