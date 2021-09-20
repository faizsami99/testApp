import { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");

    const changeName = (event) => {
        setName(event.target.value);
    }

    const changeNumber = (event) => {
        setNumber(event.target.value);
    }

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const Register = () => {
        const obj = {
            name,
            number,
            email,
            password
        }

        localStorage.setItem(email, JSON.stringify(obj));

       
    }

    return (
        <>  
            <div className="second">
            <div className="heading">
                <h1>Welcome My Friend</h1>
                <p>Feel free to signup</p>
            </div>
            <div className="form">
                <input type="text" placeholder="Enter Name" value={name} onChange={changeName}/>
                <input type="text" placeholder="Enter number" value={number} onChange={changeNumber}/>
                <input type="email" placeholder="Enter Emial" value={email} onChange={changeEmail} />
                <input type="password" placeholder="Enter password" value={password} onChange={changePassword}/>
                <button className="Button" onClick={
                    Register
                }>Register</button>
            </div>
            </div>
        </>
    );
}


export default Signup;