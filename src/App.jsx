//-----------------------------------------------------------------------------
import { useState  } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useEffect } from "react"

function App() {
  // const [count, setCount] = useState(0)
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({}) /* Pason 1 - funcion*/

  useEffect( () => {
    const obtenerLS = () => {
      //Si no hay nada en localStoge
      const pacientesLS = localStorage.getItem('pacientes') 
      console.log(pacientesLS);
    }
    obtenerLS();
  }, []) /* cuando se le pasa el arreglo vacio quiere decir que se ejecutara una sola vez */

  // Guardando datos enm el local storage
  useEffect( () => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes))
  }, [pacientes])
  
  // configurando boton eliminar
  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);

    setPacientes(pacientesActualizados);
  }
  
  return (
    <div className="container mx-auto mt-20">
      <Header/> 
      
      <div className="mt-12 md:flex ">
        <Formulario
          pacientes = {pacientes}
          setPacientes = { setPacientes } // enviar a formularios
          paciente = {paciente} 
        />
        
        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente = {setPaciente} /* Paso 2 - la paso hacia el componente */
          eliminarPaciente = {eliminarPaciente}
        />
      </div> 
    </div>
  )
}

export default App /* me direcciona hacia el main */
