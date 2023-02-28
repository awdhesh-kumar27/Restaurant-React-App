import React, { useEffect } from "react";
import './UserHome.css';
import SidebarUser from "../../Components/Sidebar/SidebarUser";
import { Outlet } from "react-router-dom";
import { useFirebase } from "../../Components/UserContext/Context";
import Signin from "../SignIn/Signin";
import { useNavigate } from "react-router-dom";

const UserHome = () =>{

    const {user} = useFirebase();
    const {loginStatus}  = useFirebase();
    const navigate = useNavigate();
    
    useEffect(()=>{

    },[user]);


    {
        if(!loginStatus){
            
            return (<Signin></Signin>);
        }
    }
    return(
        <div>
       <SidebarUser></SidebarUser>
           <div>
            <Outlet></Outlet>
           </div>
        </div>
    );
}

export default UserHome;