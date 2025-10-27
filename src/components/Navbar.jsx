import { Link } from "react-router-dom"

const Navbar = function () {
    return(
        <section className="h-8 md:h-10 px-5 md:px-20 bg-pink-900 flex items-center justify-start">
            <Link to={'/'} className="text-white text-xl font-serif">RESTAURANTE</Link>
        </section>
    )
}

export default Navbar