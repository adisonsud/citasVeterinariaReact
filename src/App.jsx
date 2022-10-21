import { useState, useEffect} from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  // const [count, setCount] = useState(0)
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({}) /* Pason 1 - funcion*/
  
  
  //Bloque Local Storage - el orden es importante-------------------
  // Queremos q se carge una vez el componente este listo
  // este es un buen lugar para ver si en el local storage hay algo
  // si hay algo, lo vamos a leer y lo vamos a setear para que ya no sea un arreglo vacio
  useEffect( () => {
    const obtenerLS = () => {
      //Si no hay nada en localStoge
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    }
    obtenerLS();
  }, []) /* cuando se le pasa el arreglo vacio [] quiere decir que se ejecutara una sola vez */

  // Este bloque sincroniza el state con lo que hay en pacientes
  // Guardando datos en el local storage
  // cuando se ejecute este otro effect ya va a detectar algo y ya no va aperder los datos
  useEffect( () => {
    /* JSON.stringify va a convertir el arreglo u objeto en string */
    localStorage.setItem('pacientes', JSON.stringify( pacientes))
  }, [pacientes]) /* le decimos q cada q aya un cambio en pacientes(L8) queremos ejecutar este codigo  */
  //Fin del Bloque Local Storage-------------------------------------


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
