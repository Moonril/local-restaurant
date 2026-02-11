import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import WeekMenu from "./WeekMenu"


const HomePage = function () {

    /* dates */
    const today = new Date()
    
    const startOfWeek = new Date(today)
    const endOfWeek = new Date(today)
    const day = today.getDay()

    // monday
    startOfWeek.setDate(today.getDate() - ((day + 6) % 7))
    // sunday
    endOfWeek.setDate(startOfWeek.getDate() + 6)


    const formatDate = (date) =>
        date.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long"
    })

    return (
        <section className="min-h-screen flex flex-col ">
            {/* <Navbar /> */}

            {/* big container */}
            <div className="min-h-screen flex flex-col items-center p-5 text-black dark:text-white bg-white dark:bg-black">
                {/* title */}
                <h1 className="py-10 text-4xl md:text-6xl font-serif">RESTAURANTE</h1>
                <img src="collage.png" alt="collage" className="hidden md:block" />
                <img src="collage-mobile.png" alt="collage-mobile" className=" md:hidden" />
                {/* description */}
                <p className="px-3 md:px-25 py-5 text-2xl text-justify">Servimos una cantidad limitada de sets diarios, tanto para comer en el local como para llevar de Martes a Viernes de 13.00 ha 16.00 h, o hasta fin de existencias. Al preparar una cantidad limitada de comida, es posible que muchos días nos quedemos sin ella. Sentimos las molestias que pueda causar. Reserva una mesa para asegurarte tu comida!</p>
                {/* this week */}
                <div className="py-20">
                    <h2 className="text-2xl sm:text-4xl font-medium mb-10 text-center capitalize">Esta semana, {formatDate(startOfWeek)} – {formatDate(endOfWeek)}</h2>
                    {/* cards */}
                    <WeekMenu />


                </div>
                {/*  */}

            </div>

            <div className="flex flex-col items-center p-5 text-black dark:text-white bg-white dark:bg-black">
                <h3>Find us on social media!</h3>
                <div className="flex gap-5 py-2">
                    <Link to={'https://www.instagram.com/'} target="_blank" className=" underline text-white hover:text-red-600"><img src="insta-logo.png" alt="" /></Link>
                    <Link to={'https://www.facebook.com/'} target="_blank" className=" underline text-white hover:text-red-600"><img src="fb-logo.png" alt="" /></Link>
                    <Link to={'/https://x.com/'} target="_blank" className=" underline text-white hover:text-red-600"><img src="x-logo.png" alt="" /></Link>
                </div>
            </div>

            
        </section>
    )
}

export default HomePage