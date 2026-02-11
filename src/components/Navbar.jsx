import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../auth/AuthContext"
import Swal from "sweetalert2"

const Navbar = function () {

    const { isAuthenticated, username, logout } = useContext(AuthContext)

    const navigate = useNavigate()

    
    const logoutAlert = () => {
        Swal.fire({
            title: 'Logout effettuato con successo!',
            icon: 'success',
            confirmButtonText: 'OK',
        }).then(() => {
            navigate('/home')
        })
    }
    
    const handleLogout = () => {
        logout()        
        logoutAlert()
    }

    return(
        <section className="h-8 md:h-10 px-5 md:px-20 bg-pink-900 flex items-center justify-between">
            {
                isAuthenticated ? (
                    <Link to={'/home'} className="text-white text-xl font-serif">RESTAURANTE</Link>               
                ) : (
                    <Link to={'/'} className="text-white text-xl font-serif">RESTAURANTE</Link>                    
                )
            }
            {
                isAuthenticated ? (
                    <div className="flex gap-1">
                        <Link to={'/backoffice'} className=" text-white hover:text-red-600">Backoffice,</Link>
                        <button onClick={handleLogout} className=" underline text-white hover:text-red-600">Logout</button>
                    </div>
                    
                ) : (
                    
                    <Link to={'/login'} className=" underline text-white hover:text-red-600">login</Link>
                    
                )
            }
            
        </section>
    )
}

export default Navbar