import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Conozca al equipo apasionado</h1>
      <div className='carrusel'></div>
      <div className='contacto'></div>
    </>
  )
}

export default App
