// const Error = ({mensaje}) => {
//   return (
//     <div className="bg-red-900 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
//       <p>{mensaje}</p>
//     </div>
//   )
// }
// export default Error

// otra forma de pasar info a otro componente
const Error = ({children}) => {
  return (
    <div className="bg-red-900 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
      {children}
    </div>
  )
}

export default Error