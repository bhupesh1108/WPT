
import { useState } from 'react';
import  './App1.css';
import note from './notes';
export default function AddData({addData}){

    const[data,setdata]=useState()
    // const[count,setCount]=useState(2)
    function handlerchange(e){
        
        setdata({
         ...data,
        [e.target.name]:e.target.value,

    })
  //  console.log(data)
    }
    function handlerclick(e){
        e.preventDefault();
     //   console.log(data)
        addData(data)
    }

 return(  <form >
    <div className='add'>
    <h1>add vlog</h1>
    <input  type="text" name='title' placeholder='title' onChange={handlerchange}/>
    <input type="desc" name='content'  placeholder='content' onChange={handlerchange}/>
    {/* <input type="submit">submit</input> */}
    <button type="submit" onClick={handlerclick}>submit</button>
    </div>
   </form>)
}