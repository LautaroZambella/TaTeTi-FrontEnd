import classes from "./game.module.css"
import { useState, useEffect } from "react"
import { Socket } from "../../socket.js"

const Game = ({datas, turno}) => {

    const [turnoPlayer, setTurnoPlayer] = useState(turno)
    const [posicion, setPosicion] = useState(["","","","","","","","",""])
    const [render, setRender] = useState(0)

    useEffect(()=>{
        try{
          Socket.on('actualizacion', (tabla) => {
            console.log(tabla)
            setPosicion(tabla)
          })
        } catch(error) {
          console.log(error)
        }
    },[])

    // useEffect(()=>{
    //     if (datas == "2") setTurnoPlayer(false)
    //     console.log("datas: " + datas);
    //     console.log(turnoPlayer + " dentro del if de turno para datas = 2");
        
    // },[])

    const makeAplay =  (index) => {
        if (posicion[index] === "" && turnoPlayer) {
            Socket.emit("position", index)
            console.log(turnoPlayer + " " + index)
            setTurnoPlayer(!turnoPlayer)
        }
    }

    const reset = () =>{
        setPosicion (["","","","","","","","",""])
        setTurnoPlayer(true)
        Socket.emit("reseteo", datas)
    }



    return(
        <div className={`${classes.container}`}>
            <div className={`${classes.board}`}>
                <div className={`${classes.row1}`}>
                    <div className={`${classes.squares}`} onClick={()=> makeAplay(0)}><p>{posicion[0]}</p></div>
                    <div className={`${classes.squares}`} onClick={()=> makeAplay(1)}><p>{posicion[1]}</p></div>
                    <div className={`${classes.squares}`} onClick={()=> makeAplay(2)}><p>{posicion[2]}</p></div>
                </div>
                <div className={`${classes.row2}`}>
                    <div className={`${classes.squares}`} onClick={()=> makeAplay(3)}><p>{posicion[3]}</p></div>
                    <div className={`${classes.squares}`} onClick={()=> makeAplay(4)}><p>{posicion[4]}</p></div>
                    <div className={`${classes.squares}`} onClick={()=> makeAplay(5)}><p>{posicion[5]}</p></div>
                </div>
                <div className={`${classes.row3}`}>
                    <div className={`${classes.squares}`} onClick={()=> makeAplay(6)}><p>{posicion[6]}</p></div>
                    <div className={`${classes.squares}`} onClick={()=> makeAplay(7)}><p>{posicion[7]}</p></div>
                    <div className={`${classes.squares}`} onClick={()=> makeAplay(8)}><p>{posicion[8]}</p></div>
                </div>
            </div>
            <button onClick={()=> reset()}>Resetear {datas}</button>
        </div>
    )
}

export default Game