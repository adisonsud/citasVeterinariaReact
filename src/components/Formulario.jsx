const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento Pacientes</h2>
      
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>
      
      <form className="bg-white shadow-xl rounded-lg px-5 py-10 mb-10">
        {/* Nombre de la Mascota*/}
        <div className="mb-5"> 
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input 
            id="mascota"
            type="text" 
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div> {/* Fin - Nombre de la Mascota */}
        
        {/* Nombre del propietario */}
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario</label>
          <input 
            id="propietario"
            type="text" 
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div> {/* Fin - Nombre del propietario */}
        
        {/* Email del propietario */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email</label>
          <input 
            id="email"
            type="email" 
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div> {/* Fin - Email del propietario */}
        
        {/* Fecha de Alta */}
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta</label>
          <input 
            id="alta"
            type="date" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div> {/* Fin - Fecha de Alta */}
        
        {/* Sintomas de la Mascota */}
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Síntomas</label>
          <textarea 
          id="sintomas" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Describe los Síntomas">
          </textarea>
        </div> {/* Fin - Sintomas de la Mascota */}
        
        <input 
          type="submit" 
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
          hover:bg-indigo-700 cursor-pointer transition-colors" 
          value="Agregar Pacientes"/>
      </form>
           
    </div>
  )
}

export default Formulario
