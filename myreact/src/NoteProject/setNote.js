import notes from "./notes"
import Note from "./Note"
export default function Setnote(props){
return(<>
    {props.data.map(ev=>(<Note key={ev.key}  title={ev.title} content={ev.content} />))}
    </>)
}