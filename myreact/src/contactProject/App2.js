import Card from "./card";
import contact from "./contact";

function createcard(contac){
  return(  <Card
    
    name={contac.name}
    lastname={contac.lastname}
    ></Card>)
}
function App2(){
    return(
        <>
        <h1>flat mates</h1>
        {contact.map(createcard)}
        </>
    )
}
export default App2;