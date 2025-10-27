import { Link } from "react-router-dom"


const LandingPage = function () {


    return (
        <section className="bg-pink-900 min-h-screen flex flex-col p-5 items-center justify-center font">

            <h1 className="text-white text-6xl font-serif">RESTAURANTE</h1>

            <Link to={'/home'} className="text-white text-lg underline mt-3">Reservas</Link>

            
        </section>
    )
}

export default LandingPage