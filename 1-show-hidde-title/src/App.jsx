import { useState } from 'react'
import './App.css'

function App() {
  const [isHidde, setIsHidde] = useState(false)

  return (
    <>
      <button onClick={()=> setIsHidde(!isHidde)}> Mostrar / Ocultar </button>

      { isHidde || <h1> Bienvenido a retos de React </h1> }
    </>
  )
}

export default App
