import Input from "./Input"
import Register from "./Register"
export default function Login(props){
    return(
        <form className="form">
 <Input type="text" placeholder="username"/>
 <Input type='password' placeholder="password"/>
{props.isregistered===false ? (<Input type='password' placeholder='confirm password'/>):null}

  <button type="submit">{props.isregistered? "Login": "Register"}</button>
</form>
    )
}