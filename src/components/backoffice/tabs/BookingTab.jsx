import axios from "axios"
import { useEffect, useState } from "react"


const BookingTab = function () {

    const APIUrlGetBookings = 'http://localhost:8080/bookings'
    const token = localStorage.getItem("token")

    const [bookings, setBookings] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    /* get bookings */
    const getBookings = () => {
        axios
        .get(APIUrlGetBookings, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        })
        .then((response) => {
            console.log(response.data.content, 'bookings')
            
            setBookings(response.data.content)
        })
        .catch((error) => {
            console.log("errore nel recupero menu", error)
            setIsLoading(false)
            setIsError(true)
            
        })
    }

    /* update bookings */

    /* handle modal */


    useEffect(()=>{
            getBookings()
        }, [])

    return (
        <section className=" min-h-screen py-6">
            <h3 className="text-2xl mb-10 font-bold">Reservas</h3>
            <div className="flex justify-center ">
                <table className="min-w-[800px] table-auto bg-zinc-900">
                    <thead className="bg-zinc-950">
                        <tr>
                            <th className="px-3 py-2"></th>
                            <th className="px-3 py-2">ID</th>
                            <th className="px-3 py-2">Creado</th>
                            <th className="px-3 py-2">nombre</th>
                            <th className="px-3 py-2">Cantidad de personas</th>
                            <th className="px-3 py-2">Dìa reservado</th>
                            <th className="px-3 py-2">email</th>
                            <th className="px-3 py-2">Preferencias</th>
                            <th className="px-3 py-2">estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking) => (
                                <tr key={booking.id}>
                                    <td>
                                        <button className=" cursor-pointer px-3 py-2" onClick={() => {
                                            setIsModalOpen(true)
                                        }}>&#x1F441;</button> 

                                    </td>
                                    <td className="px-3 py-2">{booking.id}</td>
                                    <td className="px-3 py-2">{booking.bookingCreationDate}</td>
                                    <td className="px-3 py-2">{booking.name}</td>
                                    <td className="px-3 py-2">{booking.numberOfCustomers}</td>
                                    <td className="px-3 py-2">{booking.checkInDate}</td>
                                    <td className="px-3 py-2">{booking.email}</td>
                                    <td className="px-3 py-2">{booking.preference}</td>
                                    <td className="px-3 py-2">{booking.bookingStatus}</td>                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {/* modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white text-black p-6 rounded-lg w-96">
                    
                    <h2 className="text-xl font-bold mb-4">
                        Edit 
                    </h2>

                    <form action="" className="flex flex-col gap-4 my-4">
                        <div>
                            <label className="block text-sm font-medium">Nombre</label>
                            <input type="text" name="checkInDate"  className="w-full border p-2 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Personas</label>
                            <input type="number" name="checkInDate"  className="w-full border p-2 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Dìa</label>
                            <input type="date" name="checkInDate"  className="w-full border p-2 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input type="email" name="checkInDate"  className="w-full border p-2 rounded" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Preferencia</label>
                            <input type="textarea" name="checkInDate"  className="w-full border p-2 rounded" />
                        </div>
                        
                    </form>

                    

                    <div className="flex justify-end gap-3 m-2">
                        <button
                        onClick={() => setIsModalOpen(false)}
                        className="px-4 py-2 bg-gray-300 rounded"
                        >
                        Cancel
                        </button>

                        <button
                        
                        className="px-4 py-2 bg-pink-700 text-white rounded"
                        
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

export default BookingTab