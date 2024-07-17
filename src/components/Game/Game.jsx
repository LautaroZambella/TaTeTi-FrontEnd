import classes from "./game.module.css"
import { useState } from "react"

const Game = () => {

    const [turnoPlayer1, setTurnoPlayer1] = useState(true)
    const [posicion, setPosicion] = useState(["","","","","","","","",""])

    const makeAplay =  (index) => {
        console.log("In the function")
        if (posicion[index] === "") {
            const newPosicion = [...posicion]
            if (turnoPlayer1) {
                newPosicion[index] = "X"
                console.log("Turno X")
            } else {
                newPosicion[index] = "O"
                console.log("Turno O")
            }
            setPosicion(newPosicion)
            setTurnoPlayer1(!turnoPlayer1)
        }
     }

    const reset = () =>{
        setPosicion (["","","","","","","","",""])
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
            <button onClick={()=> reset()}>Resetear</button>
        </div>
    )
}

export default Game