import { useState } from "react"

const Tabs = function () {

    const [activeTab, setActiveTab] = useState("elenco")

    const tabs = [
        { id: "bookings", label: "Reservas" },
        { id: "dishes", label: "Platos" }
    ]


    return (
        <section className="bg-red-600 w-full text-center">
            <div>
                <h3>tabs</h3>
                <div className="">
                    {activeTab === "bookings" && (
                        <div>reservas</div>
                    )}
                    {activeTab === "dishes" && (
                        <div>platos</div>
                    )}
                </div> 
                <div>
                    bookings - platos
                </div>
            </div>
            <div>tab content</div>
        </section>
    )
}

export default Tabs