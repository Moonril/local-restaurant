import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const DishTab = function () {

    const APIUrlGetDishes = 'http://localhost:8080/dishes'
    const token = localStorage.getItem("token")

    const [dishes, setDishes] = useState([])

    /* get dishes */
    const getDishes = () => {
        axios
        .get(APIUrlGetDishes, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        })
        .then((response) => {
            console.log(response.data.content, 'Dishes')
            
            setDishes(response.data.content)
        })
        .catch((error) => {
            console.log("errore nel recupero menu", error)
            setIsLoading(false)
            setIsError(true)
            
        })
    }

    /* update dishes */


    useEffect(()=>{
            getDishes()
        }, [])

    return (
        <section className="p-10">
            <div className="flex flex-col md:flex-row flex-wrap gap-5 items-center justify-center">

            {dishes.map((dish) => (

                <div key={dish.id} className="border-2 border-slate-500 py-5 rounded-2xl text-center text-2x w-xs">
                    <h4 className="text-3xl capitalize mb-2">{dish.name}</h4>
                    <h5 className="font-semibold mb-2 text-2xl">{dish.title}</h5>
                    <img src={dish.image} alt={dish.title} className="w-sm h-48 object-cover" />
                    <p className="text-lg p-5">{dish.description}</p>
                    <button to={`/reservar`} className=" text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-teal-600 hover:bg-primary-700 focus:ring-primary-800 hover:bg-teal-500">Modifica</button>
                </div>

            ))}
            

            </div>
        </section>
    )
}

export default DishTab