import React from "react";
import { useState } from "react";
import './SignupRest.css';
import { NavLink } from "react-router-dom";
import UserloginImg from "../../Assets/restaurant-signup.png";
import { useFirebase } from "../../Components/UserContext/Context";

const SignupRest = () => {
   
    const firebase = useFirebase();
    const [RestaurantName,setRestaurantName] = useState("");
    const  [OwnerName, setOwnerName] = useState("");
    const  [Email, setEmail] = useState("");
    const  [Password, setPassword] = useState("");
    const  [Mobileno, setmobileno] = useState("");
    const  [Address, setaddress] = useState("");
    const [UserType,setUserType] = useState("Restaurant");

    const mobilenohandler = (event) =>{
        const mobileno = event.target.value;
        setmobileno(mobileno);
   };

    const ownernamehandler = (event) =>{
         const ownername = event.target.value;
         setOwnerName(ownername);
    };
  
    const restaurantnamehandler = (event) =>{
        const restaurantname = event.target.value;
        setRestaurantName(restaurantname);
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
        console.log("Create account successfull");
        await firebase.signupUserwithEmailandPassword(Email,Password);
        console.log("signIn successfull");
        setEmail("");
        setOwnerName("");
        setRestaurantName("");
        setPassword("");
        setaddress("");
        setmobileno("");
   }
   
    return (
        <div className="register-restaurant">
        <div className="register-img-div">
          <img className="register-img" src={UserloginImg}></img>
        </div>
        <div className="register-div">
            <div className="register-form">
                <form onSubmit={registerHandler}>
                    <div><h1 className="heading"> Restaurant</h1></div>
                    <div >
                    <label> Restaurant Name </label>
                    <br></br>
                    <input className="input-box" type="text" name="restaurantname" value={RestaurantName} onChange = {restaurantnamehandler} required placeholder="Restaurant Name"></input>
                    </div>
                    <div >
                    <label>Mob. No. </label>
                    <br></br>
                    <input className="input-box" type="text" name="mobileno" value={Mobileno} onChange = {mobilenohandler} required placeholder="Mobile No."></input>
                    </div>
                    <div >
                    <label> Name </label>
                    <br></br>
                    <input className="input-box" type="text" name="ownername" value={OwnerName} onChange = {ownernamehandler} required placeholder="Owner Name"></input>
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
                    <div> Not Restaurant ? Signup 
                    <NavLink style={{margin:'10px'}} className={'user-nav-link'} to='/SignUp/User'>User</NavLink>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}
export default SignupRest;