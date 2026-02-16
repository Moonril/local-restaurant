import axios from "axios"
import { useState } from "react"
import Swal from "sweetalert2"

const BookingPage = function () {

    const APIUrlNewBooking = 'http://localhost:8080/bookings'
    const [inputValues, setInputValues] = useState({})


    /* POST new booking */

    const postNewBooking = () => {

        axios
        .post(APIUrlNewBooking,inputValues)
        .then((response) => {
           console.log("Booking saved: ", response.data)
            Swal.fire({
                title: 'Reserva realizada!',
                icon: 'success',
                confirmButtonText: 'OK',
            })
            
        })
        .catch((err) => {
            console.log("Error during saving: ", err)
            Swal.fire({
                title: 'Error',
                text: 'Controlla che la ricetta non esista già.',
                icon: 'error',
                confirmButtonText: 'Riprova',
            })
            
        })
    }



    return (
        <section className="min-h-screen flex flex-col items-center p-5 text-black dark:text-white bg-white dark:bg-black">

            <div className="flex flex-col items-center p-5 text-black dark:text-white bg-white dark:bg-black">
                {/* <h1 className="py-10 text-4xl md:text-6xl font-serif">RESTAURANTE</h1> */}
                <img src="booking-banner.png" alt="collage" />
                

            </div>





            <form className="w-full max-w-lg" onSubmit={(e)=>{
                e.preventDefault()
                postNewBooking()
                
            }}>

                <h2 className="py-10 text-2xl md:text-4xl font-serif text-center">Reserva una mesa</h2>
                
                {/* name */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-name">
                            Nombre
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-name" type="text" placeholder="Giulia" required value={inputValues.name} onChange={(e)=>{
                            setInputValues({
                                ...inputValues,
                                name: e.target.value,
                            })
                        }} />

                    </div>

                    {/* email */}
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-email">
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="giulia@giulia.com" required value={inputValues.email} onChange={(e)=>{
                            setInputValues({
                                ...inputValues,
                                email: e.target.value,
                            })
                        }} />

                    </div>
                </div>
                {/* allergies */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-notes">
                            Alergias
                        </label>
                        <textarea name="" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-notes" placeholder="cachuetes.." value={inputValues.preference} onChange={(e)=>{
                            setInputValues({
                                ...inputValues,
                                preference: e.target.value,
                            })
                        }} ></textarea>
                    </div>
                </div>

                


                {/* how many ppl + time and day */}
                <div className="flex flex-row justify-center -mx-3 mb-2">
                    
                    {/* people */}
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-people">
                                personas
                            </label>
                            <input name="" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-people" placeholder="1" type="number" min={1} max={4} required value={inputValues.numberOfCustomers} onChange={(e)=>{
                            setInputValues({
                                ...inputValues,
                                numberOfCustomers: e.target.value,
                            })
                        }} />
                        </div>
                    </div>

                    <div className="w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-date">
                            Dìa
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-date" type="datetime-local" placeholder="risotto.jpg" required value={inputValues.checkInDate} onChange={(e)=>{
                            setInputValues({
                                ...inputValues,
                                checkInDate: e.target.value,
                            })
                        }}  />
                    </div>
                    
                </div>

                {/* submit */}
                <div className="flex flex-row justify-center -mx-3 mb-2 pt-3">
                        <button type="submit" className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 me-2">Reserva</button>
                        {/* delete */}
                </div>
                
            </form>
        </section>
    )
}

export default BookingPage