import axios from "axios"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"


const BookingTab = function () {

    const APIUrlGetBookings = 'http://localhost:8080/bookings'
    const token = localStorage.getItem("token")

    const [bookings, setBookings] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        numberOfCustomers: "",
        checkInDate: "",
        email: "",
        preference: ""
    })
    const [selectedBooking, setSelectedBooking] = useState({})

    /* format date */
    function formatDate(date) {
        return new Date(date).toLocaleString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        })
    }


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
            //console.log(response.data.content, 'bookings')
            
            setBookings(response.data.content)
        })
        .catch((error) => {
            console.log("errore nel recupero menu", error)
            setIsLoading(false)
            setIsError(true)
            
        })
    }

    /* update bookings */

    const updateBooking = (id, data) => {
        axios.put(`http://localhost:8080/bookings/${id}`, data, {
            headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            },
        })
        .then((response) => {
            console.log("Prenotazione aggiornata:", response.data)
            Swal.fire({
                        title: 'Agiornamento completato!',
                        text: 'La tua prenotazione è stata aggiornata con successo!',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    })
            getBookings()
        })
        .catch((error) => {
            console.error("Errore nella modifica:", error)
            Swal.fire({
                    title: 'Errore nella richiesta',
                    text: 'Riempi tutti i campi.',
                    icon: 'error',
                    confirmButtonText: 'Riprova',
            })
        })
    }



    useEffect(()=>{
            getBookings()
            if (selectedBooking) {
                setFormData({
                name: selectedBooking.name || "",
                numberOfCustomers: selectedBooking.numberOfCustomers || "",
                checkInDate: selectedBooking.checkInDate || "",
                email: selectedBooking.email || "",
                preference: selectedBooking.preference || ""
                })
            }

        }, [selectedBooking])

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
                                            setSelectedBooking(booking)
                                        }}>&#x1F441;</button> 

                                    </td>
                                    <td className="px-3 py-2">{booking.id}</td>
                                    <td className="px-3 py-2">{formatDate(booking.bookingCreationDate)}</td>
                                    <td className="px-3 py-2">{booking.name}</td>
                                    <td className="px-3 py-2">{booking.numberOfCustomers}</td>
                                    <td className="px-3 py-2">{formatDate(booking.checkInDate)}</td>
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
                            <input type="text" name="name"  className="w-full border p-2 rounded" value={formData.name} onChange={((e) => setFormData({ ...formData, name:e.target.value}))} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Personas</label>
                            <input type="text" name="numberofCustomers"  className="w-full border p-2 rounded" value={formData.numberOfCustomers} onChange={((e) => setFormData({ ...formData, numberOfCustomers:e.target.value}))} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Dìa</label>
                            <input type="datetime-local" name="checkInDate"  className="w-full border p-2 rounded" value={formData.checkInDate} onChange={((e) => setFormData({ ...formData, checkInDate:e.target.value}))} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input type="email" name="email"  className="w-full border p-2 rounded" value={formData.email} onChange={((e) => setFormData({ ...formData, email:e.target.value}))} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Preferencia</label>
                            <input type="textarea" name="preference"  className="w-full border p-2 rounded" value={formData.preference} onChange={((e) => setFormData({ ...formData, preference:e.target.value}))} />
                        </div>
                        
                    </form>

                    

                    <div className="flex justify-end gap-3 m-2">
                        <button
                        onClick={() => setIsModalOpen(false)}
                        className="px-4 py-2 bg-gray-300 rounded"
                        >
                        Cancel
                        </button>

                        <button className="px-4 py-2 bg-pink-700 text-white rounded" onClick={() => {
                            updateBooking(selectedBooking.id, formData)
                            console.log(formData, 'formdata')
                            setIsModalOpen(false)  
                        }}>
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