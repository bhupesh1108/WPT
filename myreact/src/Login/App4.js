import React from "react";
import './App4.css';
import Login from "./Login";
import Register from "./Register";

var islogedin=false;



function App4() {
  return (
    <div className="container">


{/* {islogedin?<Login ></Login>:<Register></Register>}  */}

<Login isregistered={islogedin} ></Login>  
    </div>
  );
}

export default App4;
