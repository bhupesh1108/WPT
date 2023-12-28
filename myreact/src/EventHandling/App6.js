import React, { useState } from "react";
import './App6.css';
function App() {
   
   
        const [initial,final]=useState('');
        const[headin,headingstate]=useState('');
    function changeevent(event){
       final(event.target.value);
    }
    function heading(event){
        headingstate(initial);
        event.preventDefault()

    }
  return (
    <div className="container">
      <h1>Hello</h1>

      <h2>{headin}</h2>
      <form>
      <input type="text" placeholder="What's your name?" onChange={changeevent} />
      <button  type="submit" onClick={heading} >Submit</button>
      </form>
    </div>
  );
}

export default App;
