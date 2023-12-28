import  './App1.css';
import Header from './Header';
import Note from './Note';
import Footer from './footer';
import noteDb from './notes';
import AddData from './AddData';
import { useState } from 'react';
import Setnote from './setNote';

function App1(){
    
const [notes,setData]=useState(noteDb)
function addData(Data){
    setData([...notes,{...Data,id:notes.length+1}])
}
    return(

        <>
        <div>
        <div>
        
       
        <Header></Header>
        <AddData addData={addData}/>
        <Setnote data={notes}></Setnote>

        
       </div>
       <footer/>
       </div>
        </>
    )
}
export default  App1;