import React from "react";
import { useState ,useEffect } from "react";
import './Signin.css';
import { useFirebase } from "../../Components/UserContext/Context";
import {  useNavigate } from "react-router-dom";
const Signin = () => {
   
    const firebase = useFirebase();
    const navigate = useNavigate();
    const  [Email, setEmail] = useState("");
    const  [Password, setPassword] = useState("");
     
    useEffect(()=>{
        if(firebase.user){
            //   console.log(firebase.user);
               if(firebase.user.displayName === "User"){
                   navigate("/UserHome");
            }
               if(firebase.user.displayName === "Restaurant"){
                    navigate("/RestaurantHome");
               }
               // navigate("/UserHome");
            }else{
                navigate("")
            }
    },[firebase.user]);
   
    const emailhandler = (event) =>{
        const email = event.target.value;
        setEmail(email);
   };
   const passwordhandler = (event) =>{
        const password = event.target.value;
        setPassword(password);
    };
   
   

    const loginHandler = async(event) =>{
       event.preventDefault();
       console.log("Login the user");
       const login = await firebase.signinUserwithEmailandPassword(Email,Password);
       
       
       console.log(firebase.userData);
       console.log("Login successful");
       setEmail("");
       setPassword("");
       
    }
   
    return (
        <div className="login-div">
            <div className="login-form">
                <form onSubmit={loginHandler}>
                    <div><h1 className="heading">Login</h1></div>
                    <div>
                    <label>Email </label>
                    <br></br>
                    <input className="input-box" type="email"  name="email" value={Email} onChange = {emailhandler} required placeholder="Email"></input>
                    </div>
                    <div>
                    <label>Password </label>
                    <br></br>
                    <input className="input-box" type="password" name="password" value={Password} onChange={passwordhandler} required placeholder="Password" ></input>
                    </div>
                    <div>
                        <button className="submit-button" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Signin;