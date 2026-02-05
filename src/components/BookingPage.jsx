const BookingPage = function () {
    return (
        <section className="min-h-screen flex flex-col items-center p-5 text-black dark:text-white bg-white dark:bg-black">
            <form className="w-full max-w-lg" onSubmit={(e)=>{
                e.preventDefault()
                
            }}>

                {/* nome, how many people, date, time, allergies*/}
                {/* name */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide  text-xs font-bold mb-2" htmlFor="grid-title">
                            Nombre
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-title" type="text" placeholder="Giulia" required />

                    </div>
                </div>

                

                {/* people */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="grid-description">
                            Cuanta gente
                        </label>
                        <input name="" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-description" placeholder="1" type="number" min={1} max={4} required />
                    </div>
                </div>

                {/* type + foto */}
                <div className="flex flex-row justify-center -mx-3 mb-2">
                    
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-type">
                            Tipo
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-type" required >
                                <option value="" disabled>
                                    Tipo
                                </option>
                                <option value={'PRIMO'}>Primo</option>
                                <option value={'SECONDO'}>Secondo</option>
                                <option value={'CONTORNO'}>Contorno</option>
                                <option value={'DOLCE'}>Dolce</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-imgUrl">
                            Foto url
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-imgUrl" type="datetime-local" placeholder="risotto.jpg" required  />
                    </div>
                </div>

                {/* submit */}
                <div className="flex flex-row justify-center -mx-3 mb-2 pt-3">
                        <button type="submit" className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 me-2">Salva ricetta</button>
                        {/* delete */}
                </div>
                
            </form>
        </section>
    )
}

export default BookingPage