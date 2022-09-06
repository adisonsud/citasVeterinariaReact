const Paciente = ({paciente}) => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl ">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">Juan</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">correo@correo.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
          <span className="font-normal normal-case">10 Dicienbre de 2022</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
          <span className="font-normal normal-case">Lorem ipsum dolor sit amet, 
          consectetur adipisicing elit. Laboriosam iure vero modi nemo eos aliquam. 
          Possimus aliquam maxime temporibus unde tenetur cupiditate. Minima sint 
          nemo incidunt pariatur possimus ea voluptates!</span>
        </p>
      </div>
  )
}

export default Paciente