import Prac from "./prac1";

export default function Name(){
   
 const date=new Date(2019,1,1,11)
 const currenthr=date.getHours()
 let greeting;
 const customstyle={
    color:""
 }
 if(currenthr<12){
    greeting="gm"
    customstyle.color="red"
 }
 else if(currenthr<18){
    greeting="ga"
    customstyle.color="blue"
 }
 else{
    greeting="gn"
    customstyle="green"
 }


    return(<>
        <h1 style={{customstyle}}>{greeting}</h1>
        <h2>{Prac()}</h2>
        </>
    )
}