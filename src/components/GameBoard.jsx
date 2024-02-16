// import React, { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
// map(arrow function to call every nested item in array)
// first li repressent rows here
// then we want grid,

export default function GameBoard({onSelectSquare, turns}) {
  // this is deriving the state
  // gameBorad is a computed value that is derived from a state
  let gameBoard=initialGameBoard;
  for (const turn of turns){
    // destructuring twice
    const {square, player}=turn;
    const {row,col}=square;

    gameBoard[row][col]=player;
  }

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectBox(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard)=>{
  //       // state that depends on objects and arrays should be updated in an immutable way
  //       const updateGameBoard=[...prevGameBoard.map((initialArray)=>[...initialArray])];
  //       updateGameBoard[rowIndex][colIndex]=activePlayerSymbol;
  //       return updateGameBoard;
  //   })
  //   onSelectSquare();
  // }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>onSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
