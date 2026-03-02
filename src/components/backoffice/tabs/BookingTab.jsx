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
        <section className="">
            <h3>Reservas</h3>
            <div className="flex justify-center ">
                <table className="min-w-[800px] table-auto">
                    <thead>
                        <tr>
                            <th className="px-3">ID</th>
                            <th className="px-3">Creado</th>
                            <th className="px-3">nombre</th>
                            <th className="px-3">Cantidad de personas</th>
                            <th className="px-3">Dìa reservado</th>
                            <th className="px-3">email</th>
                            <th className="px-3">Preferencias</th>
                            <th className="px-3">estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking) => (
                                <tr key={booking.id}>
                                    <button className=" cursor-pointer">&#x1F441;</button>
                                    <td className="ps-2">{booking.id}</td>
                                    <td className="ps-2">{booking.bookingCreationDate}</td>
                                    <td className="ps-2">{booking.name}</td>
                                    <td className="ps-2">{booking.numberOfCustomers}</td>
                                    <td className="ps-2">{booking.checkInDate}</td>
                                    <td className="ps-2">{booking.email}</td>
                                    <td className="ps-2">{booking.preference}</td>
                                    <td className="ps-2">{booking.bookingStatus}</td>                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default BookingTab