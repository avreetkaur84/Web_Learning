import { useState } from "react";

export default function LudoBoard() {
    let [moves, setMoves] = useState({blue: 0, red: 0, green: 0, yellow: 0});

    let updateBlue = () => {
        setMoves({...moves, blue: moves.blue+1});
    }

    let updateYellow = () => {
        setMoves({...moves, yellow: moves.yellow+1});
    }

    let updateGreen = () => {
        setMoves({...moves, green: moves.green+1});
    }

    let updateRed = () => {
        setMoves({...moves, red: moves.red+1});
    }

    // ...moves  - it means to spread the moves object, means to create its new copy and then pass it.

    return(
        <div>
            <h1>Ludo Board Game</h1>
            <div>
                <p>Blue Moves = {moves.blue}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}