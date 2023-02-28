import React from "react";
import SidebarRest from "../../Components/Sidebar/SidebarRest";
import { Outlet } from "react-router-dom";

const RestaurantsHome = ()=>(
    <div>
        <SidebarRest />
        <div>
           <Outlet>
            RestaurantHome
           </Outlet>
        </div>
    </div>
)

export default RestaurantsHome;