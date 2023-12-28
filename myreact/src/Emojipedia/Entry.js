export default function Entry(props){
    return (
        <div className="term">
        <dt>
          <span className="emoji" role="img" aria-label="Tense Biceps">
            {props.emoji1}
          </span>
        <br/>
          <span>{props.name}</span>
          <br/>
        </dt>
        <dd>
         {props.description}
        </dd>
      </div>
    )
}