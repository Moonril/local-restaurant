import axios from "axios"
import { useEffect, useState } from "react"


const BookingTab = function () {

    const APIUrlGetBookings = 'http://localhost:8080/bookings'
    const token = localStorage.getItem("token")

    const [bookings, setBookings] = useState([])

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


    useEffect(()=>{
            getBookings()
        }, [])

    return (
        <section className="">
            Reservas
        </section>
    )
}

export default BookingTab