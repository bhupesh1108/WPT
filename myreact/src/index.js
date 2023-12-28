import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import App1 from './NoteProject/App1';
// import './NoteProject/App1.css'
// import App2 from './contactProject/App2';
// import App3 from './Emojipedia/App3';
// import App4 from './Login/App4';
import App5 from './React hook/App5';
import Counter from './React hook/increment-decrement';
import Curtime from './React hook/currenttime';
import App6 from './EventHandling/App6';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    //  <App2 />
  // </React.StrictMode>
   <App1/>
  //<App5/>
//<Counter/> 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
