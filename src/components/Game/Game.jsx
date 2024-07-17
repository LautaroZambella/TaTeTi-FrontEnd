import classes from "./game.module.css"

const Game = () => {
    return(
        <div className={`${classes.container}`}>
            <div className={`${classes.board}`}>
                <div className={`${classes.row1}`}>
                    <div className={`${classes.squares}`}><p>O</p></div>
                    <div className={`${classes.squares}`}><p>O</p></div>
                    <div className={`${classes.squares}`}><p>O</p></div>
                </div>
                <div className={`${classes.row2}`}>
                    <div className={`${classes.squares}`}><p>X</p></div>
                    <div className={`${classes.squares}`}><p></p></div>
                    <div className={`${classes.squares}`}><p></p></div>
                </div>
                <div className={`${classes.row3}`}>
                    <div className={`${classes.squares}`}><p></p></div>
                    <div className={`${classes.squares}`}><p></p></div>
                    <div className={`${classes.squares}`}><p></p></div>
                </div>
            </div>
        </div>
    )
}

export default Game