import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) =>{ /* Paso 3 - la recibo en el componente */

  return ( 
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
  
      {pacientes && pacientes.length ?(
        <>
          <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      
          <p className="text-lg text-center mt-5 mb-10 ">
          Administra tus {''}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
      
          {/* mala practica 
          
            {pacientes.map( (paciente, index) => (
            <Paciente
              key={index}
              paciente={paciente}
            />
          ))} */}
      
          {pacientes.map( (paciente) => (
            <Paciente
              key = {paciente.id}
              paciente = {paciente}
              setPaciente = {setPaciente} /* Paso 4 -  */ 
              eliminarPaciente = {eliminarPaciente}
            />
          ))}  
        </>
        
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
      
          <p className="text-lg text-center mt-5 mb-10 ">
          Comienza agregando pacientes {''}
          <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
          </p>
        </>
        
      )}    
    </div> 
  )
}
export default ListadoPacientes;