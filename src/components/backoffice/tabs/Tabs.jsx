import { useState } from "react"
import BookingTab from "./BookingTab"
import DishTab from "./DishTab"

const Tabs = function () {

    const [activeTab, setActiveTab] = useState("bookings")

    const tabs = [
        { id: "bookings", label: "Reservas" },
        { id: "dishes", label: "Platos" }
    ]


    return (
        <section className=" w-full text-center">
            
            {/* tabs */}
            <ul className="flex justify-center text-lg font-medium">
                    {tabs.map((tab) => (
                    <li key={tab.id} className="">
                        <button
                        onClick={() => setActiveTab(tab.id)}
                        className={`inline-block py-4 px-2 md:p-4 cursor-pointer ${
                            activeTab === tab.id
                            ? "underline underline-offset-8 decoration-[#31572C] decoration-3"
                            : "hover:text-gray-600 hover:bg-gray-5"
                        }`}
                        >
                        {tab.label}
                        </button>
                    </li>
                    ))}
            </ul>

            {/* tabs content */}
            <div className="">
                {activeTab === "bookings" && (
                    <BookingTab />
                )}
                {activeTab === "dishes" && (
                    <DishTab />
                )}
            </div> 

            
        </section>
    )
}

export default Tabs