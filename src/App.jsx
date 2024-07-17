import { useState } from 'react'
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import Game from './components/Game/Game'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='cuerpo'>
        <Header />
        <Game />
        <Footer />
      </div>
    </>
  )
}

export default App
