import Navbar from "./Navbar"


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
        month: "long",
    })


    return (
        <section className="min-h-screen flex flex-col ">
            <Navbar />

            {/* big container */}
            <div className="min-h-screen flex flex-col items-center p-5 text-black dark:text-white bg-white dark:bg-black">
                {/* title */}
                <h1 className="py-10 text-4xl md:text-6xl font-serif">RESTAURANTE</h1>
                <img src="collage.png" alt="collage" className="hidden md:block" />
                <img src="collage-mobile.png" alt="collage-mobile" className=" md:hidden" />
                {/* description */}
                <p className="px-3 md:px-25 py-5">Servimos una cantidad limitada de sets diarios, tanto para comer en el local como para llevar de Martes a Viernes de 13.00 ha 16.00 h, o hasta fin de existencias. Al preparar una cantidad limitada de comida, es posible que muchos días nos quedemos sin ella. Sentimos las molestias que pueda causar. Reserva una mesa.</p>
                {/* this week */}
                <div className="py-20">
                    <h2 className="text-2xl font-medium mb-15">This week, {formatDate(startOfWeek)} – {formatDate(endOfWeek)}</h2>
                    {/* cards? */}
                    <div className="flex flex-row gap-5">
                        <div className="border-2 border-slate-500 py-5 rounded-2xl text-center text-2xl">
                            <h4 className="text-3xl">Martes, {startOfWeek.getDate() + 1}</h4>
                            <h5 className="">Ebi tempura</h5>
                            <img src="unadon.jpg" alt="daily meal" className="w-md" />
                            <p className="text-lg">descrizione descrizione</p>
                            <p className="text-lg">prenota?</p>
                        </div>


                    </div>

                </div>
                {/*  */}

            </div>

            
        </section>
    )
}

export default HomePage