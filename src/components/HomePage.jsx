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

            <div className="bg-black p-20 items-center">
                <p>spacing</p>
            </div>

            {/* find us */}

            <div className="flex flex-col items-center gap-8 p-6 text-black dark:text-white bg-white dark:bg-black">
                <h3 className="text-3xl text-shadow-md/20">Donde estamos</h3>
                
                <div className="flex flex-col md:flex-row m:w-xl">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5790.225290108554!2d10.32744894740432!3d43.47911951957426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d5e61e2519c089%3A0x70bfd41bcbc381dd!2sCalafuria%20Province%20of%20Livorno%2C%20Italy!5e0!3m2!1sen!2ses!4v1752496589592!5m2!1sen!2ses" width="600" height="450" loading="lazy" className="w-full"></iframe>
                    {/* <img src="restaurant-interior.jpg" alt="photo of the interior of the restaurant" /> */}
                    
                </div>

                

            </div>

            <div className="flex flex-row items-center justify-center p-5 text-black dark:text-white bg-white dark:bg-black">
                {/* <div className="flex flex-col items-center">
                    <h3>Dirección</h3>
                    <div className="flex flex-row">
                        <p>
                            Carrer de provincia 23, 08023, Barcelona.
                        </p> 
                        <Link to={'https://www.google.com/maps'} target="_blank" className=" inline underline text-white hover:text-red-600"><img src="map-icon.png" alt="" /></Link>

                    </div>
                </div> */}

                <div className="flex flex-col items-center">
                    <h3>Find us on social media!</h3>
                    <div className="flex gap-5 py-2">
                        <Link to={'https://www.instagram.com/'} target="_blank" className=" underline text-white hover:text-red-600"><img src="insta-logo.png" alt="" /></Link>
                        <Link to={'https://www.facebook.com/'} target="_blank" className=" underline text-white hover:text-red-600"><img src="fb-logo.png" alt="" /></Link>
                        <Link to={'/https://x.com/'} target="_blank" className=" underline text-white hover:text-red-600"><img src="x-logo.png" alt="" /></Link>
                        
                    </div>
                </div>
            </div>

            
        </section>
    )
}

export default HomePage