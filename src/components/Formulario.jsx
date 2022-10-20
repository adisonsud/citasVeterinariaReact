import { useState, useEffect } from "react"
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente}) => {
  const [nombre, setNombre] =useState('');
  const [propietario, setPropietario] =useState('');
  const [email, setEmail] =useState('');
  const [alta, setAlta] =useState('');
  const [sintomas, setSintomas] =useState('');
  const [error, setError] =useState(false);

  useEffect( () =>{ 
    if(Object.keys(paciente).length > 0){ /* Object.keys-> una forma de comprobar si un objeto tiene algo */
      setNombre(paciente.nombre)     
      setPropietario(paciente.propietario)     
      setEmail(paciente.email)     
      setAlta(paciente.alta)     
      setSintomas(paciente.sintomas)     
    } else{
      console.log("No hay nada");
    }
  }, [paciente]) /* Se va a ejecutar siempre que paciente cambie ... */
  
   
  
  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    
    return random + fecha
  }
  
  // paso 1 - para enviar formulario 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    /* VALIDACION DE FORMULARIO */
    /* .includes('') -> verifica q haya algun string vacio */
    if ([nombre, propietario, email, alta, sintomas].includes('') ) {
      console.log('Hay al menos un campo vacio');
      setError(true) /*  */
      return;
    } else {
      setError(false)
      
      // OBJETO DE PACIENTE
      const objetoPaciente = {
        nombre, 
        propietario, 
        email, 
        alta, 
        sintomas,
      }
      //---------------------------------------------------------------
      if (paciente.id) {
        // Editando registro
        objetoPaciente.id = paciente.id
        /* itera en cada uno de los registros, accede a cada uno de los objetos*/
        const pacientesActualizados = pacientes.map( pacienteState =>  
          // Si tienen el Id igual es el q se esta editando y 
          // retorno el objetoPaciente que se manda a consola y dice que esta actualizado
          // Si no som iguales retorno el objeto que esta en el state porque no es ese el que estoy modificando
          // y lo retorna tal cual está
          pacienteState.id === paciente.id ? objetoPaciente : pacienteState 


        )
        setPacientes(pacientesActualizados )
      } else {
        // Nuevo Registro
        objetoPaciente.id = generarId() // Genero un nuevo ID 
        setPacientes([...pacientes, objetoPaciente]) 
      }
      
      //Reiniciar el forn(cada vez q envie el form se vacea)
      setNombre('')
      setPropietario('')
      setEmail('')
      setAlta('')
      setSintomas('')
    }
  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento Pacientes</h2>
      
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Adminístralos</span>
      </p>
      
      <form /* inicio del formulario */
      
      // parte 2- para ecribir en el form y este haga visible lo que se va escribiendo
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-lg px-5 py-10 mb-10"
      >
        {/* una forma de importar el mensaje de error */}
        {/* {error && <Error mensaje='Todos los campos son obligatorios'/>} */}
        
        {/* otra forma de importar el children de error */}
        { error && <Error><p>Todos los campos son obligatorios</p></Error>}
        
        {/* Nombre de la Mascota*/}
        <div className="mb-5"> 
          {/* htmlFor-> clickear en cualquier lado para editar algo*/}
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input 
            id="mascota"
            type="text" 
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            /** onChange Es como un event Listener para ecribir en el form y este
             * haga visible lo que se va escribiendo
             */
            value={nombre}
            onChange = { (e) => setNombre(e.target.value) }
          />
            
        </div> {/* Fin - Nombre de la Mascota */}
        
        {/* Nombre del propietario */}
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario</label>
          <input 
            id="propietario"
            type="text" 
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange= {(e) => setPropietario(e.target.value)}
            />
            
            
        </div> {/* Fin - Nombre del propietario */}
        
        {/* Email del propietario */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email</label>
          <input 
            id="email"
            type="email" 
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange = {(e) => setEmail(e.target.value)}
            />
       
        </div> {/* Fin - Email del propietario */}
        
        {/* Fecha de Alta */}
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta</label>
          <input 
            id="alta"
            type="date" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange = {(e) => setAlta(e.target.value)}        
            />
            
        </div> {/* Fin - Fecha de Alta */}
        
        {/* Sintomas de la Mascota */}
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Síntomas
          </label>
          <textarea 
          id="sintomas" 
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Describe los Síntomas"
          value = {sintomas}
          onChange = { (e) => setSintomas(e.target.value)}
          />
        </div> {/* Fin - Sintomas de la Mascota */}
        
        <input 
          type="submit" 
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
          hover:bg-indigo-700 cursor-pointer transition-colors" 
          value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          />
      </form>
           
    </div>
  )
}

export default Formulario
