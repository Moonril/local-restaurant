const WeekMenu = function () {

    const startDate = new Date()
    const weekDay = startDate.getDay()
    const offset = weekDay === 0 ? -6 : 1 - weekDay
    const monday = new Date(startDate)
    monday.setDate(startDate.getDate() + offset)

  
    const meals = [
        {
        title: "Unadon",
        description: "Filetes de anguila de agua dulce a la parrilla, glaseados con una salsa agridulce a base de soja llamada tare.",
        image: "unadon.jpg",
        },
        {
        title: "Tan Tan Men",
        description: "Sopa de fideos ramen japonesa, rica y sabrosa, adaptada del famoso dan dan mian chino de Sichuan.",
        image: "tan-tan-men.jpg",
        },
        {
        title: "Tonkatsu",
        description: "Chuleta de cerdo empanizada y frita, se prepara rebozando lonchas de lomo o filete de cerdo en pan rallado panko.",
        image: "tonkatsu.jpg",
        },
        {
        title: "Udon",
        description: "Fideos japoneses gruesos, se pueden servir calientes en un caldo sabroso o fríos con una salsa para mojar.",
        image: "udon.jpg",
        },
    ]
    
    const days = Array.from({ length: 4 }, (_, i) => {
        const day = new Date(monday)
        day.setDate(monday.getDate() + i + 1)
        const dame = day.toLocaleDateString("es-ES", { weekday: "long" })
        const number = day.getDate()
        return { dame, number, ...meals[i] }
    })

    return (
        <div className="flex flex-col md:flex-row flex-wrap gap-5 items-center justify-center">

            {days.map((day, index) => (

                <div key={index} className="border-2 border-slate-500 py-5 rounded-2xl text-center text-2x w-xs">
                    <h4 className="text-3xl capitalize mb-2">{day.dame}, {day.number}</h4>
                    <h5 className="font-semibold mb-2 text-2xl">{day.title}</h5>
                    <img src={day.image} alt={day.title} className="w-sm h-48 object-cover" />
                    <p className="text-lg p-5">{day.description}</p>
                </div>

            ))}

        </div>
    )
}

export default WeekMenu