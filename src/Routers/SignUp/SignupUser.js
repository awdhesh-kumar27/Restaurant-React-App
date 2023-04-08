import React from "react";
import { useState,useEffect} from "react";
import './SignupUser.css';
import { Link,NavLink } from "react-router-dom";
import UserloginImg from "../../Assets/user-signup.png";
import { useFirebase } from "../../Components/UserContext/Context";
import {  useNavigate } from "react-router-dom";
const SignupUser = () => {
   
    const navigate = useNavigate();
    const firebase = useFirebase();
    const  [Name, setName] = useState("");
    const  [Email, setEmail] = useState("");
    const  [Password, setPassword] = useState("");
    const  [Mobileno, setmobileno] = useState("");
    const  [Address, setaddress] = useState("");
    const [Type,setType] = useState("User");


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
            }
    },[firebase.user]);

    const mobilenohandler = (event) =>{
        const mobileno = event.target.value;
        setmobileno(mobileno);
   };

    const namehandler = (event) =>{
         const name = event.target.value;
         setName(name);
    };

    const emailhandler = (event) =>{
        const email = event.target.value;
        setEmail(email);
   };
   const passwordhandler = (event) =>{
        const password = event.target.value;
        setPassword(password);
    };

    const addresshandler = (event) =>{
        const address = event.target.value;
        setaddress(address);
   };

   const registerHandler = async (event) =>{
          event.preventDefault();
          
          await firebase.signupUserwithEmailandPassword(Email,Password);
          firebase.profileUpdate(Type);
          await firebase.addNewUser(Type,Name,Email,Address,Mobileno);
        //  console.log("Create account successfull");
          setEmail("");
         setName("");
         setPassword("");
         setaddress("");
         setmobileno("");
        
   }
   

    return (
        <div className="register-user">
            <div className="register-img-div">
              <img className="user-img" src={UserloginImg}></img>
            </div>
        <div className="register-div">
            <div className="register-form">
                <form onSubmit={registerHandler}>
                    <div><h1 className="heading">User</h1></div>
                    <div >
                    <label>Mob. No. </label>
                    <br></br>
                    <input className="input-box" type="text" name="mobileno" value={Mobileno} onChange = {mobilenohandler} required placeholder="Mobile No."></input>
                    </div>
                    
                    <div >
                    <label>Name </label>
                    <br></br>
                    <input className="input-box" type="text" name="name" value={Name} onChange = {namehandler} required placeholder="Name"></input>
                    </div>
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
                    <div >
                    <label>Address </label>
                    <br></br>
                    <input className="input-box" type="text" name="address" value={Address} onChange = {addresshandler} required placeholder="Address"></input>
                    </div>
                    <div>
                        <button className="submit-button" type="submit">Register</button>
                    </div>
                    <div>Not User ? Sign up 
                    <NavLink style={{margin:'10px'}} className={'register-nav-link'} to='/SignUp/Restaurant'> Restaurant</NavLink>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}
export default SignupUser;