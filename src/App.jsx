import { useEffect, useState } from 'react'
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import Game from './components/Game/Game'
import { Socket } from './socket.js'
import './App.css'

// HOLA
function App() {
 const [mostrar, setMostrar] = useState()
//  const [turnoPlayer, setTurnoPlayer] = useState(true)
 useEffect(() => {
   Socket.emit("inicio", "llegue");

   try {
      const N_jugador_CB = (data) => {
        //  console.log(data);
        setMostrar(data);
        //  console.log(typeof data)
        //  console.log(typeof mostrar)
        //  console.log(mostrar)
      }
    
      Socket.on('N_jugador', N_jugador_CB);

      return () => {
        Socket.off('N_jugador', N_jugador_CB)
    }
   } catch (error) {
     console.log(error);
   }
 }, []);




  return (
    <>
      <div className='cuerpo'>
        <Header />
        <Game datas={mostrar} /*turno = {turnoPlayer}*//>
        <Footer />
      </div>
    </>
  )
}

export default App
