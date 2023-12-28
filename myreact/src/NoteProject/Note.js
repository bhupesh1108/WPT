export default function Note(props){

    return (
        <div className="note"> 
          <h2>{props.title}</h2> 
          <p>----------------</p>
          <p>{props.content}</p>
        </div>
    )
}
