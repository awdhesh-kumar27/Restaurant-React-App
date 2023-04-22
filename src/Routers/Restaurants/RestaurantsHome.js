import React from "react";
import SidebarRest from "../../Components/Sidebar/SidebarRest";
import { Outlet } from "react-router-dom";
import { useFirebase } from "../../Components/UserContext/Context";
import Signin from "../SignIn/Signin";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RestaurantsHome = ()=>{
    const {user} = useFirebase();
    const {loginStatus}  = useFirebase();
    const navigate = useNavigate();
    useEffect(()=>{

    },[user]);

    {
        if(!loginStatus){
        //  navigate(-1);
            return <Signin></Signin>
        }
    }

  return (
    <div>
        <SidebarRest />
        <div>
           <Outlet>
            RestaurantHome
           </Outlet>
        </div>
    </div>
  );
    
  }

export default RestaurantsHome;