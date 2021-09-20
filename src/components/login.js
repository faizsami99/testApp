
import { useState } from "react";
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom"
function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    const changeName = (event) => {
        setEmail(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);     
    }

    const logInNow = () => {
        const p = JSON.parse(localStorage.getItem(email)).password;
        console.log(p);
        if(p === password){
            history.push("/home");
        }
        else{
            alert("Emial or password is incorrect");
        }
    }

    return (
        <>  
        <div className="second">
            <div className="heading">
                <h1>Welcome My Friend</h1>
                <p>Please login to your account</p>
            </div>
            <div className="form">
                <input type="email" name="name"  value={email} onChange={changeName}/>
                <input type="password" name="password" onChange={changePassword} value={password}/>
                <button className="Button" onClick={logInNow
                }>Login</button>
            </div>
            <div className="link">
                <p>Not member? </p>
                <Link to="/signup" >register</Link>
            </div>
        </div>
        </>
    );
}


export default Login;