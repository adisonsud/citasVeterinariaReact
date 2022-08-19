import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
/* el root se encuentra en el index.html */
ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>
) /* direcciona hacia App */
