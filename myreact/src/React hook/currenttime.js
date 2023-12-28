import { useState } from "react";


var date=new Date()



export default function Curtime(){
  
    setInterval(updateTime,1000)
      const currTime=  date.toLocaleTimeString()
    
    var[time,currentTime]=useState(currTime)
let count=0;
function updateTime(){
    // const newtime=new Date().toLocaleTimeString()
    // currentTime(newtime)
    count=count+1;
}


return(

<>
    <p>{count}</p>
    <button type="button" onClick={updateTime}>currentTime</button>
    </>
)
}