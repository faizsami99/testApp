
import { useState } from "react";
import {Link} from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changeName = (event) => {
        setEmail(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);     
    }

    const logInNow = () => {
        console.log("LongedIn");
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
                <button className="Button" onClick={()=>
                    Login
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