import { useState } from 'react'
import './App.css'
import Card from './componentes/card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Conozca al equipo apasionado</h1>
      <Card/>
      <div className='carrusel'></div>
      <div className='contacto'></div>
    </>
  )
}

export default App
