import React from "react";
import './UserHome.css';
import SidebarUser from "../../Components/Sidebar/SidebarUser";
import { Outlet } from "react-router-dom";

const UserHome = () =>{

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