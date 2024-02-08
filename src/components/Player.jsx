import React, { useState } from 'react';

export default function Player({initialName,symbol, isActive}) {
  const [playerName,setPlayerName]=useState(initialName);
  const [isSetting, setIsSetting]=useState(false);
  function handleEditClick(){
    // setIsSetting(true);
    // setIsSetting(isSetting?false:false);
    // setIsSetting(!isSetting);    // react will schedule the state update and afterwards it will uppdate, not at that instant
    setIsSetting((editing)=>!editing)  // here working with latest available state value
    
  }

  // accept event obj ass parameter
  // **** remember this concept, to change the text value, use state concept to first have initial value at that place, then onChange event gets trigerred and new value entered which is target value, it renders that, also pass event obj as parameter of that function
  function handleChange(event){
    setPlayerName(event.target.value);
  }

  let editablePlayerName=<span className="player-name">{playerName}</span>;
  if(isSetting){
    // this is "two way binding"- onChange-> value out, value={} value gets in
    editablePlayerName=<input type="text" required value={playerName} onChange={handleChange}/>
    // playerName=<input type="text" required defaultValue={name}/>
  }
  return (
    <li className={isActive?"active":undefined}>
    <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditClick}>{isSetting ? "Save":"Edit"}</button> 
    </li>
  )
}
