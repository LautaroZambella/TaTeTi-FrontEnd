import { useEffect, useState } from 'react'
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import Game from './components/Game/Game'
import { Socket } from './socket.js'
import './App.css'

function App() {
 const [mostrar, setMostrar] = useState("")

 let turnoPlayer = true;
  
 useEffect(() => {
   Socket.emit("inicio", "llegue");

   try {
     Socket.on('N_jugador', (data) => {
       console.log(data);
       setMostrar(data);
     });
   } catch (error) {
     console.log(error);
   }
 }, []);

 useEffect(() => {
   console.log(mostrar);
   if (mostrar === "2") {
     turnoPlayer = false;
   }
   console.log(turnoPlayer);
 }, [mostrar]);

   
  

  return (
    <>
      <div className='cuerpo'>
        <Header />
        <Game datas={mostrar} turno = {turnoPlayer}/>
        <Footer />
      </div>
    </>
  )
}

export default App
