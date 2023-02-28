import React from "react";
import { Outlet } from "react-router-dom";
import { Link,NavLink } from "react-router-dom";
const Signup = () =>{

    return(
        <div>
            {/* <h1>Dashboard</h1>
            <NavLink style={{margin:'10px'}} to='Restaurant'>Register Restaurant</NavLink>
            <NavLink style={{margin:'10px'}} to='User'>Register User</NavLink> */}
             <Outlet></Outlet>
        </div>
    );
}

export default Signup;