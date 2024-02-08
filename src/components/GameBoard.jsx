import React, { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
// map(arrow function to call every nested item in array)
// first li repressent rows here
// then we want grid,

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectBox(rowIndex, colIndex) {
    setGameBoard((prevGameBoard)=>{
        // state that depends on objects and arrays should be updated in an immutable way
        const updateGameBoard=[...prevGameBoard.map((initialArray)=>[...initialArray])];
        updateGameBoard[rowIndex][colIndex]="X";
        return updateGameBoard;
    })
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>handleSelectBox(rowIndex,colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
