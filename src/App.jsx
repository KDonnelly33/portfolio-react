import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Kevin Donnelly's Portfolio</h1>
        <Navbar/>
        <Navbar/>
        <Navbar/>
        <Navbar/>
        
        
      </header>
    </>
  )
}

export default App
