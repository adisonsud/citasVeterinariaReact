//-----------------------------------------------------------------------------
import { useState  } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  // const [count, setCount] = useState(0)
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({}) /* Pason 1 - funcion*/
  
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
        />
      </div> 
    </div>
  )
}

export default App /* me direcciona hacia el main */
