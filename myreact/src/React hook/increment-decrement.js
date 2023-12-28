import { useState } from "react";







function Counter(){

    

    const [count,final]=useState(0);
    function decrement(){
        final(count-1);
       
    }
    function increment(){

        final(count+1)
        }

    return (
        <>
        <button onClick={increment}>increment</button>
        <br/>
        <p>{count}</p>
        <br/>
        <button onClick={decrement}>decrement</button>
        
        
        </>
    )
}
export default  Counter;