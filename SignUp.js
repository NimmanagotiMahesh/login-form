import React from "react";
import "./SignUp.css";
import { Navigate, useNavigate } from "react-router-dom";

const SignUp = ()=>{
    const navigate = useNavigate();
    function handleSignUp(){
        console.log("Sign button is being clicked");
    }
    const handleLogin =()=>{
        navigate("/");
    }


    return (
       <div id="loginCard" className="loginCard">
        <h1>Sign Up</h1>
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
  
export {SignUp};