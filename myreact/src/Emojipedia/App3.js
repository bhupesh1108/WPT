import React from "react";
import Entry from "./Entry";
import emojipedia from "./Emojipidia";
import './App3.css';
function emoji(emojiterm){
    return(
        <Entry 
        key={emojiterm.id}
        emoji1={emojiterm.emoji}
        name={emojiterm.name}
        discrption={emojiterm.meaning}
        >

        </Entry>
    ) 
}
function App3 () {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(emoji)}
      </dl>
    </div>
  );
}

export default App3;
