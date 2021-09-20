import { useState } from 'react';
import { useHistory } from "react-router-dom"

function getList(){
    if(localStorage.getItem("MyItem") != null){
        let mylst = JSON.parse(localStorage.getItem("MyItem"));
        return mylst;
    }
    else{
        localStorage.setItem("MyItem", JSON.stringify([]));
        return [];
    }
}

function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [ids, setIds] = useState(getList());
    let history = useHistory();

    const changeName = (event) => {
        var letters = /^[A-Za-z\s]+$/;
        if(event.target.value.match(letters)){
            setName(event.target.value);
        }
        else{
            alert('Only Alphabets are allowed');
        }
    }

    const changeNumber = (event) => {
        var num = /^[0-9]+$/;
        if(event.target.value.match(num)){
            setNumber(event.target.value);
        }
        else{
            alert('Only numbers are allowed');
        }
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

        
        const newItem = [...ids, email];
        setIds(newItem);
        localStorage.setItem("MyItem", JSON.stringify(newItem));
        localStorage.setItem(email, JSON.stringify(obj));

        history.push("/");
       
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