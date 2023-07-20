import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const navigate = useNavigate();
    function handleLogin(){
        console.log("Login button clicked");
        
    }
    const handleSignUp =()=>{
        navigate("/signup");
    }


    return (
       <div id="loginCard" className="loginCard">
        <h1>Login</h1>
        <div id="inputs" className="inputs">
            <input placeholder="Enter Your Name" className="nameInput" type="text"/>
            <input placeholder="Enter Your Password" className="passwordInput" type="password"/>
        </div>
        <div className="buttons">
            <button className="login" onClick={handleLogin}>Login</button>
            <button className="signup" onClick={handleSignUp}>Sign Up</button>
        </div>
        
       </div>
    )
}
  
export default Login;