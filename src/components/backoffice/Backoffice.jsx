import RestaurantSettings from "./settings/RestaurantSettings"

const Backoffice = function () {
    return (
        <section className="min-h-screen flex flex-col items-center p-5 text-black dark:text-white bg-white dark:bg-black">
            
            {/* Main part - restaurant settings */}

            <div className="flex flex-col items-center">
                <h1 className="text-6xl my-2">Configuración</h1>
                <RestaurantSettings />
            </div>

            {/* tabs - diff component*/}

            {/* tabs content - diff component */}
            
            <div>tabs</div>
            <div>tab content</div>
        </section>
    )
}

export default Backoffice