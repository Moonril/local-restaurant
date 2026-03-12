import RestaurantSettings from "./settings/RestaurantSettings"
import Tabs from "./tabs/Tabs"

const Backoffice = function () {
    return (
        <section className="min-h-screen flex flex-col items-center  text-black dark:text-white bg-white dark:bg-black">
                {/* Main part - restaurant settings */}
            <div className="md:p-5">
                <div className="flex flex-col items-center">
                    <h1 className=" text-2xl md:text-6xl my-2">Configuración</h1>
                    <RestaurantSettings />
                </div>

            </div>
            


            {/* tabs */}


            
            <Tabs />
            
        </section>
    )
}

export default Backoffice