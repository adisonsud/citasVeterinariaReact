function Header() {
  
  return (
    <h1 /* add css con tailwind css al h1 */
    className="font-black text-5xl text-center md:w-4/5 mx-auto"> 
    Seguimiento Pacientes {""}
    
      <span /* add color */
      className="text-indigo-600">
      Veterinaria
      </span>
      
    </h1>
  )  
}

export default Header; // direccionarlo hacia app.jsx