import { useEffect, useState } from 'react'
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import Game from './components/Game/Game'
import { Socket } from './socket.js'
import './App.css'

function App() {
 const [mostrar, setMostar] = useState("")

  useEffect(()=>{
    Socket.emit("inicio", "llegue");

    Socket.on('N_jugador', (data)=>{
      console.log(data);
    });
    try{
      Socket.on('N_jugador', (data) => {
        console.log(data)
        setMostar(data)
      })
    } catch(error) {
      console.log(error)
    }
  }, [])

  

  return (
    <>
      <div className='cuerpo'>
        <Header />
        <Game datas={mostrar}/>
        <Footer />
      </div>
    </>
  )
}

export default App
