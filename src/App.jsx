import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/Player.jsx"
import { useState } from "react"
import Log from "./components/Log.jsx"

function App() {
  const [gameTurns, setGameTurns]=useState([])
  const [activePlayer, setActivePlayer]=useState("X");

  function handleSelectSquare(rowIndex,colIndex){
    setActivePlayer((currentActivePlayer)=>currentActivePlayer=="X"?"O":"X");
    setGameTurns((prevTurn)=>{
      let currentPlayer="X";
      if(prevTurn.length>0 && prevTurn[0].player ==="X"){
        currentPlayer="O";
      }
      const updatedTurns=[
        {square: {row:rowIndex, col:colIndex}, player: currentPlayer},
        ...prevTurn];
        return updatedTurns;
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer=="X"}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer=="O"}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
