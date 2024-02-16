import React from 'react'

export default function Log({ turns  }) {
  return (
    // {which player} selected {which field}
    <ol id="log">
      {turns.map(turn=>(
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row},{turn.square.col}
        </li>))}
    </ol>
  )
}
