import { useEffect, useState } from 'react'
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import Game from './components/Game/Game'
import { Socket } from './socket.js'
import './App.css'

function App() {

  useEffect(()=>{
    Socket.emit("inicio", "llegue");

    Socket.on('N_jugador', (data)=>{
        console.log(data);
    });
  }, [])

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
